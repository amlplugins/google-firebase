/**
 * @amlplugins/google-firebase
 *
 * Thin namespaced re-export of the modular firebase v9+ Web SDK.
 *
 * The firebase package exposes ONLY subpath entry points (no root export):
 *   firebase/app, firebase/auth, firebase/firestore, firebase/database,
 *   firebase/storage, firebase/functions, firebase/messaging,
 *   firebase/analytics, firebase/performance, firebase/remote-config,
 *   firebase/app-check, firebase/installations, firebase/ai
 *
 * Consumers should import directly from the subpath they need:
 *   import { initializeApp } from "firebase/app";
 *   import { getAuth }       from "firebase/auth";
 *
 * This wrapper re-exports the most common modules as namespaces.
 *
 * Firebase Web SDK (client).
 */

import * as app             from "firebase/app";
import * as auth            from "firebase/auth";
import * as firestore       from "firebase/firestore";
import * as database        from "firebase/database";
import * as storage         from "firebase/storage";
import * as functions       from "firebase/functions";
import * as messaging       from "firebase/messaging";
import * as analytics       from "firebase/analytics";
import * as performance     from "firebase/performance";
import * as remoteConfig    from "firebase/remote-config";
import * as appCheck        from "firebase/app-check";
import * as installations   from "firebase/installations";

export { app, auth, firestore, database, storage, functions, messaging, analytics, performance, remoteConfig, appCheck, installations };

const sdk = { app, auth, firestore, database, storage, functions, messaging, analytics, performance, remoteConfig, appCheck, installations };
export { sdk };
export default sdk;
