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
1. Background Scripts: monitor events and then react with specified instructions
2. [Content Scrips](https://developer.chrome.com/extensions/content_scripts): 
  - The files that run in the context of web pages. By using DOM, they are able to read details of the web pages the browser visits, make changes to them and pass information to their parent extension.
  - Content scripts live in an isolated world, allowing a content script to makes changes to its JavaScript environment without conflicting with the page or additional content scripts.



Optional:
1. popup page

## Getting Start!
1. `mkdir <your_extension_dir>` && `cd <your_extension_dir>`
2. make a file by `vim manifest.json` and paste the following code:
```
{
    "name": "<Your extensions name>",
    "version": "0.0.1", // Fisrt pubilsh recommand to write 0.0.1, after that, you should increase the version at every publish.
    "description": "<your extensions description>",
    "permissions": [
        "storage",
        "activeTab"
    ],
    "background": {
        "scripts": [
            "background.js"
        ],
        "persistent": false //should be false, except using chrome.webRequest API
    },
    "browser_action": {
        "default_popup": "popup.html"
    },
    "manifest_version": 2 // required 2
}
```
  - permissions:  
     - 1. To use most chrome.* APIs, your extension must declare its intent in the "permissions" field of the manifest.
    -2. Each permission can be either one of a list of known strings or a match pattern that gives access to one or more hosts.
    - 3. Permissions help to limit damage if your extension or app is compromised by malware. Some permissions are also displayed to users before installation, as detailed in Permission Warnings.
    - 4. Waring Message:
   
        ![permission](https://raw.githubusercontent.com/ZoeLiao/Chrome-Extension-practice/master/notes/images/permission.png)

     - 5. e.g., activeTab: gives an extension temporary access to the currently active tab when the user invokes the extension
  - background script:
    - 1. to listen and react the events
    - 2. persistent: The only occasion to keep a background script persistently active is if the extension uses chrome.webRequest API to block or modify network requests. The webRequest API is incompatible with non-persistent background pages.

  - browser_action: put icons in the main Google Chrome toolbar, to the right of the address bar. In addition to its icon, a browser action can have a tooltip, a badge, and a popup.

  - If you want to upload your extension to the Chrome App Store, you shoule remove the annotation

3. make a file by `vim background.js` and paste the following code:
```
chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({ color: '#3aa757' }, function() {
        console.log("The color is green.");
    });
});
```
  - chrome API: 
    - [chrome.runtime](https://developer.chrome.com/apps/runtime): to retrieve the background page, return details about the manifest, and listen for and respond to events in the app or extension lifecycle. You can also use this API to convert the relative path of URLs to fully-qualified URLs.

4. `vim content_script.js`
```
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: "hello"}, function(response) {
        console.log(response.farewell);
  });
});
```
  - Message Passing:
    - 1. Since content scripts run in the context of a web page and not the extension, they often need some way of communicating with the rest of the extension
    - 2. Communication between extensions and their content scripts works by using message passing. Either side can listen for messages sent from the other end, and respond on the same channel
    - 3. A message can contain any valid JSON object (null, boolean, number, string, array, or object)
    - 4. Support one-time requests, long-lived connections, and cross-extension messages
    - 5. [chrome.tabs](https://developer.chrome.com/extensions/tabs):  
      - to interact with the browser's tab system. You can use this API to create, modify, and rearrange tabs in the browser. 
      - permission: tabs
5. `vim popup.html`
6. `vim popup.js`

## Note: Haddle The permission
Use the chrome.permissions API to request declared optional permissions at run time rather than install time, so users understand why the permissions are needed and grant only those that are necessary.
- file system:
  isAllowedFileSchemeAccess: Retrieves the state of the extension's access to the 'file://' scheme (as determined by the user-controlled 'Allow access to File URLs' checkbox.
![allow_access_file.png](https://raw.githubusercontent.com/ZoeLiao/Chrome-Extension-practice/master/notes/images/allow_access_file.png)
  ```
  chrome.extension.isAllowedFileSchemeAccess(
      function(isAllowedAccess){
          if(!isAllowedAccess){
              alert("Please click the 'Allow access to File URLs'")
          }else{
              // do something ...
          }
      }
  )
  ```


## Test
1. Visit [chrome://extension](chrome://extension)
2. Turn on Developer Mode
3. Click 'Load unpacked'
4. Select the directory and click 'Select' to upload it  
![upload](https://raw.githubusercontent.com/ZoeLiao/Chrome-Extension-practice/master/notes/images/upload_file.png)

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



