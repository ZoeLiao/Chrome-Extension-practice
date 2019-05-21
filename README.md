# Chrome-extension-practive
Take a note of making a Chrome Extension

## What is Chrome extensions? 

According to [Official Document](https://developer.chrome.com/extensions):  

Extensions are small event based software programs that customize the browsing experience. They are built on web technologies such as HTML, JavaScript, and CSS.

Extension files are zipped into a single .crx package that the user downloads and installs. This means extensions do not depend on content from the web, unlike ordinary web apps.

Extension are distributed through [Chrome Web Store](https://chrome.google.com/webstore/category/extensions).

![images](https://raw.githubusercontent.com/ZoeLiao/Chrome-Extension-practice/master/notes/images/chrome_app_store.png)


![images](https://raw.githubusercontent.com/ZoeLiao/Chrome-Extension-practice/master/notes/images/extensions.png)

## What's the Differece between Chrome Apps, Plugins, and Extensions?

Reference: [Chrome Apps, Plugins, Extensions: What’s the Difference?](https://www.maketecheasier.com/chrome-apps-plugins-extensions-differences/)
## History

According to [wiki](https://en.wikipedia.org/wiki/Google_Chrome#Extensions):

2009/09/09  
- Google enabled extensions by default on Chrome's developer channel, and provided several sample extensions for testing.

2009/12  
- the Google Chrome Extensions Gallery beta began with approximately 300 extensions.

2010/01/25  
- Google Chrome Extensions Gallery beta began was launched along with Google Chrome 4.0, containing approximately 1500 extensions.

## Famous Chrome Extensions:
[30 Chrome Extensions for Better Productivity in 2017](https://www.hongkiat.com/blog/productivity-chrome-extensions/)  
[The best Google Chrome extensions 2018](https://www.techradar.com/news/the-best-google-chrome-extensions)

## The Components of Chrome Extensions

Upload Required:
1. manifest.json: JSON-formatted, contains information that defines the extension.

Basic:
1. background scripts: monitor events and then react with specified instructions
2. content scrips: 

Optional:
1. popup page

## Getting Start!
1. `mkdir <your_extension_dir>` && `cd <your_extension_dir>`
2. make a file `vim manifest.json` and paste the following code:
```
{
    "name": "<Your extensions name>",
    "version": "0.0.1", // Fisrt pubilsh recommand to write 0.0.1, after that, you should increase the version at every publish.
    "description": "<your extensions description>",
    "permissions": [
        "storage",
        "activeTab"
    ],
    // background scripts, to listen and react the events
    "background": {
        "scripts": [
            "background.js"
        ],
        "persistent": false // 
    },
    // browser_action: The action while the users clicking the extension
    "browser_action": {
        "default_popup": "popup.html"
    },
    "manifest_version": 2 // required 2
}
```
Note: If you want to upload your extension to the Chrome App Store, you shoule remove the annotation

3. `vim background.js`
4. `vim content_script.js`
5. `vim popup.html`
6. `vim popup.js`

## Note: The permission
![permission](https://raw.githubusercontent.com/ZoeLiao/Chrome-Extension-practice/master/notes/images/permission.png)
- file system:

## Note: API

## Note: The communication between background.js and content scripts

## Publish
[Official Document](https://developer.chrome.com/webstore/publish)

To publish your app to the Chrome Web Store, follow these steps:

1. Create your app’s zip file
2. Create a developer account
3. Upload your app
4. Pick a payments system
5. Get app constraints and finish your app’s code
6. Get the app ID
7. Get the OAuth token
8. Finish the app
9. Provide store content
10. Pay the developer signup fee // $5 (2019/05/21)
11. Publish your app

![required](https://raw.githubusercontent.com/ZoeLiao/Chrome-Extension-practice/master/notes/images/publish_requirements.png)



