## Install

Make sure you have both **gulp** and **sass** installed globally.

Install the dependencies:

`npm install `

Build bootstrap and minify CSS:

`gulp sass`

`gulp minify-css`


Minify picturefill, build bootstrap and minify JS:

`gulp minify-picturefill`

`gulp build-bootstrap`

`gulp minify-js`

`gulp minify-analytics`

And copy the images and remaining files to dist/

`gulp copy`

Finally upload the files in dist to the server.

## References

#### Main

* https://v4-alpha.getbootstrap.com/
* https://jquery.com/

#### Testing

* http://mochajs.org/
* http://chaijs.com/
* https://github.com/dequelabs/axe-core
