### Context

Deep links vs App links. What are the differences? How should you handle both
on Android?

### Running

1. Run the server: `npm run dev`
2. Run the app on the emulator

Be sure that you're emulator is connected through Wi-Fi (so it can access the
server on `localhost`). You should be able to access `10.0.2.2:8000` from a
a browser on the emulator.

### TODOs

Mobile app:

- Add deeplink-handling activity
- Register activity in manifest (as handler)

Server:

- Page that serves deeplink (into app)

### Resources

Android docs:

- https://developer.android.com/studio/write/app-link-indexing
- https://developer.android.com/training/app-links
- https://developer.android.com/training/app-links/verify-site-associations
- https://developer.android.com/training/app-links/deep-linking

Web:

- https://developers.google.com/digital-asset-links/v1/getting-started

- https://developer.chrome.com/docs/multidevice/android/intents
- https://levelup.gitconnected.com/the-wrong-hacked-and-correct-way-of-android-deep-linking-for-redirected-multisite-with-autoverify-5c72fb1f8053

An example of a link that redirects to an app link:

```
https://urldefense.proofpoint.com/v2/url?u=https-3A__somehost.com_email_verify-3Ftoken-3DdOB2uiHBEsp-5Fr7hDzINUStAenfrHG1i0&d=DwMFaQ&c=eIGjsITfXP_y-DLLX0uEHXJvU8nOHrUK8IrwNKOtkVU&r=XddTlYpiZMSXv1EO2JMJeKLrV0klql-gjksTjVygOqY&m=B5J9zDHIQjIk_l_C4NAGW78DK8spISlAe1_WF5wiuyI&s=E681v68Gx09U2s1N58SpVGXBooPXRR-gXkwjoIRCy1I&e=
```
