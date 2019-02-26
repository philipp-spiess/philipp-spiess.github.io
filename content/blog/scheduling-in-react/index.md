---
title: "Scheduling in React"
date: "2019-03-15T12:00:00.000Z"
---

In modern applications, user interfaces often have to juggle multiple parts at the same time: A search component needs to respond to user input while providing auto completion results; An interactive dashboard needs to update the charts while loading data from the server and sending analytics data to your backend.

All these parallel steps can lead to janky interfaces and unhappy users – Let's learn how we can fix this.

## Scheduling in User Interfaces

**Users expect immediate feedback.** Wether a user is clicking on a button or adding text to an input field, they expect some kind of confirmation immediately. The button should show a modal, or the input field will display the key that was typed.

To visualize this, let's take a look at the demo application that Dan Abramov showed us at his talk [Beyond React 16](https://reactjs.org/blog/2018/03/01/sneak-peek-beyond-react-16.html) at JSConf Iceland 2018. The more you type into the input box above, the more detailed the charts below will get. Since both of those updates run at the same time, the input feels janky.

<video src="/blog/scheduling-in-react/sync-mode.mp4" muted="true" autoplay loop></video>

One thing that we can see in the example above is that it's more important to update the text box with the user input than it is to update the carts. A version that prioritizes that will appear a lot more responsive to the end user:

<video src="/blog/scheduling-in-react/concurrent-mode.mp4" muted="true" autoplay loop></video>

Unfortunately, current user interface architectures makes it non trivial to implement this kind of prioritization. One way to solve this is by [debouncing](https://davidwalsh.name/javascript-debounce-function) the chart update. The problem with this is that the charts still render in one go synchronously when the debounced callback fires, which will again cause our user interface to take multiple seconds during which it is not responsive. We can do better!

## Browser Event Loop

Before we learn more about concrete solutions, let's dig deeper and understand why the browser has issues these kind of user interfaces.

Most JavaScript code is executed on the same thread that is also responsible for other document lifecycles like layout and paint[^1]. This means that whenever your JavaScript code runs, the browser is blocked form doing anything else.

To keep the user interface responsive, we only have a very short time frame before we need to be able to receive the next input events. In the browser run loop visualization[^2] below, you can see that we only have 16 milliseconds (on a typical 60Hz screen) before the next frame is drawn and the next events need to be processed.

![The browser event loop starts by running input handlers, followed by animation frame callbacks, and ends with document lifecycles (style, layout, paint). All of this should complete within one frame which is approximately 16 milliseconds on a 60Hz display.](event-loop-browser.png)

Most JavaScript frameworks (including the current version of React) will run updates synchronously. You can think of this as a function `render()` which will only return once the DOM was updated. During this time, the main thread is blocked.

## Problems With Current Solutions

From all of the information above, we can formulate two problems that we have to solve in order to get more responsive user interfaces:

1. **Long running tasks cause frame drops.** We need to make sure our tasks are small and can be completed within a couple of milliseconds.
2. **Different parts have different importance.** In the example above you could see that prioritizing the input box leads to a better user experience. We need a way to schedule work.

## Concurrent React and the Scheduler

a

a

a

a

a

a

a

a

a

a

a

a

##

[^1]: The MDN web docs feature a great [article](https://developer.mozilla.org/en-US/docs/Tools/Performance/Scenarios/Intensive_JavaScript) about this issue.
[^2]: The graphic is based on work by Subhie Panicker's and Jason Miller's talk about [A Quest to Guarantee Responsiveness](https://developer.chrome.com/devsummit/schedule/scheduling-on-off-main-thread) at the Chrome Dev Summit 2018.
