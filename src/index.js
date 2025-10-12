const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();

/**
 * A callable Cloud Function to grant a user admin privileges.
 *
 * @param {object} data The data passed to the function, expecting { email: string }.
 * @param {object} context The context of the call, including authentication information.
 * @returns {Promise<object>} A promise that resolves with a success or error message.
 */
exports.addAdminRole = functions.https.onCall((data, context) => {
  // For the VERY FIRST admin, temporarily comment out this security check.
  // After you've made yourself an admin, uncomment it and redeploy.
  // if (context.auth.token.isAdmin !== true) {
  //   return {
  //     error: "Request not authorized. User must be an admin to fulfill request.",
  //   };
  // }

  const email = data.email;
  return admin.auth().getUserByEmail(email).then((user) => {
    return admin.auth().setCustomUserClaims(user.uid, {
      isAdmin: true,
    }).then(() => {
      return {
        message: `Success! ${email} has been made an admin.`,
      };
    });
  }).catch((err) => {
    return { error: err.message };
  });
});