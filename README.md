# make-conversation

## About

This project is a personal tool for use with Lua and the [love2d][1] framework. Once it's finished, it will be able to import and export the data format I've defined for dialogue, so I don't have to write all of the data by hand.

There is a simple regex in `pages/index.js` which will transform a Javascript object into a valid Lua table (as far as I've seen). Feel free to borrow it!

I haven't written any tests yet, as this is very much a work-in-progress prototype. Once I get the structure down and get things running end-to-end, and I know what I'll be testing, I'll add end-to-end, integration, and unit tests.

[Stay tuned to my blog][2] to get updates on the Adventure Kit toolkit I'm making!

## License

This software is licensed under the MIT license. See the LICENSE file for details.

[1]: https://love2d.org
[2]: https://blog.austinpocus.com/tags/adventure-kit
