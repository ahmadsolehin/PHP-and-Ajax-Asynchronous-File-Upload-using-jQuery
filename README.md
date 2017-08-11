## PHP file upload using jQuery
- how to upload files Asynchronously using jquery.

## Detail Description:
<p>So you might thinking what is file upload? And how it works?</p>

The answer is here, to upload your file from your local machine to the server (website) is called file upload, it works exactly same as the definition, when we select our file from the browser and click submit, the browser takes file from our local machine and submits it to the server and server do his job to save the file to the defined path.

Here I am going to explain step by step process to create the file upload feature along with the source code of this tutorial so that you can easily download and test on your local machine.



## The things you should know before following this tutorial:
<li>PHP</li>
<li>HTML</li>
<li>jQuery</li>
<li>CSS</li>
<li>Bootstrap</li>

## let’s start some coding:
<p>Look at the below code, from index.html file:</p>

<li>index.html</li>

<img width="648" alt="screen shot 2017-08-12 at 12 50 24 am" src="https://user-images.githubusercontent.com/12325386/29223227-67052cb6-7ef8-11e7-8c78-504254479b15.png">


<p>Form and Input Field: The basic need to upload file is to have <form> with enctype="multipart/form-data", if you notice the above file I have added form with enctype, next is the input field of file type, we have this field with the ID “file_to_upload“. </p>

<p>Submit Button: After </form> we have Submit button included with onClick event along with function call uploadFile(), we are going to write this function under script.js file, which is going to handle file upload operation.</p>

<li>Create script.js file:</li>

Let’s create script.js file and add following source code in to it:

script.js:


## How Install? 
- Installing is real simple 
- Just add the source code to your php root directly and your done.



## screenshot

