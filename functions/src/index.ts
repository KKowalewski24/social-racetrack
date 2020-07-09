import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.grantAdmin = functions.https.onCall((data, context) => {
    if (context.auth?.token.admin !== true) {
        return {
            error: "Request Not Authorizated - Only admin can call this function"
        }
    }

    const email = data.email;

    return grantAdminRole(email).then(() => {
        return {
            result: `Request succeed - ${email} is an admin`
        }
    });
});

async function grantAdminRole(email: string): Promise<void> {
    const user = await admin.auth().getUserByEmail(email);

    if (user.customClaims && (user.customClaims as any).admin === true) {
        return;
    }

    return admin.auth().setCustomUserClaims(user.uid, {
        admin: true
    });
}
