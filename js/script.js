/*
// Version 1.0
// iTech Empires - jQuery File Upload Script 
*/
function uploadFile()
{
	if($("#file_to_upload").val() != "")
    {
        var file_data = $('#file_to_upload').prop('files')[0];
        var form_data = new FormData();

        form_data.append('file', file_data);

        $.ajax({
            url: 'uploadFile.php', // point to server-side PHP script
            dataType: 'text',  // what to expect back from the PHP script, if anything
            cache: false,
            contentType: false,
            processData: false,
            data: form_data,
            type: 'post',
            success: function(data){
                // get server responce here
                alert(data);
                // clear file field
                $("#file_to_upload").val("");
            }
        });
    }
    else
    {
        alert("Please select file!");
    }
}