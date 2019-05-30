# chrome-vote-swapper
A simple Chrome plugin demonstrating DOM-based vote swapping on an online voting website.

## How to install

1. Download the `vote-swapper-plugin/` directory
2. Open Chrome and type `chrome://extensions` in the address bar
3. Click to enable the "Developer Mode" toggle switch
4. Click "Load unpacked," and specify the path to the `vote-swapper-plugin/` directory

## What it does

The vote swapper plugin traverses the DOM looking for instances of text notes that matches the targets, and swaps them. 

Specifically it swaps the string "Cassandra De Rolo" with the string "Fernanda Rodriguez" and vice versa on the Simply Voting [online voting demo website](https://demo.simplyvoting.com).

## How to customize

Modify variables `a` and `b` in `swap-candidate.js` to whichever strings you wish to swap and update the `document.URL.indexOf` to the URL of the site you wish to test on.
