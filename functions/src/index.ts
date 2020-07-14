import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp();

exports.grantStandardUser = functions.https.onCall((data, context) => {
    const email = data.email;

    return grantStandardUserRole(email).then(() => {
        return {
            result: `Request succeeded - ${email} is a standard user`
        }
    });
});

async function grantStandardUserRole(email: string): Promise<void> {
    const user = await admin.auth().getUserByEmail(email);

    return admin.auth().setCustomUserClaims(user.uid, {
        admin: false
    });
}

exports.grantAdmin = functions.https.onCall((data, context) => {
    if (context.auth?.token.admin !== true) {
        return {
            error: "Request Not Authorizated - Only admin can call this function"
        }
    }

    const email = data.email;

    return grantAdminRole(email).then(() => {
        return {
            result: `Request succeeded - ${email} is an admin`
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
