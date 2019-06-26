'use strict';

module.exports.hello = async (event, context, callback) => {

  const {pathParameters = {}} = event;
  const {name = 'xxx111'} = pathParameters;
  const message = `涂根华您好，${ name }.`;
  const html = `
    <html>
     <style>
      h2 {color:red;}
     </style>
     <body>
       <h1>第一个hello world 应用</h1>
       <h2>${message}</h2>
     </body>
    </html>`;
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html'
    },
    body: html
  }
};
