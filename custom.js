options = {
    success: function(files){
            send_files(files);
    },
    cancel: function(){
    },
    linkType: "direct",
    multiselect: true,
    // extensions:['.pdf','.mp4'],
};
var button = Dropbox.createChooseButton(options);
document.getElementById("dropboxContainer").appendChild(button);

const request = (url,fileName, callback) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'blob';
  
    xhr.addEventListener('load', function () {
      const blob = xhr.response;
      callback(blob,fileName); // Pass the Blob to the callback function
    });
  
    xhr.send();
  };

const saveBlobToFile = (blob, fileName) => {
    saveAs(blob, fileName);
};

function send_files(files) {
    var subject = "Shared File Links";
    console.log(files);
    const urls = files.map(file=>file.link)
    console.log(urls);
    for(var file of files){
        request(file.link, file.name, function (blob, fileName) {
            saveBlobToFile(blob, fileName);
          });
    }
}