// const { exec } = require('child_process');

const fs = require('fs');
const os = require('os');
const path = require('path');

var logstoday = [];
var logfile;
var docs = path.join(os.homedir(), 'Documents', 'DailyLogs')
if (!fs.existsSync(docs)) {
  fs.mkdirSync(docs); 
}
var date = new Date();
var datestr = date.toLocaleDateString();
datestr = datestr.replace(/\//g , "-");
logfile = path.join(docs, datestr + '.json');
if (!fs.existsSync(logfile)){
  fs.writeFileSync(logfile, '[]');
}else{
  logstoday = JSON.parse(fs.readFileSync(logfile));
}

var app = new Vue({
  el: '#logcontainer',
  data: {
		resizable:false,
    logs: logstoday
	},
	methods: {
		resizeRows: function(e){
			console.log(e)
    },
    deleteLog: function(index){
      logstoday.splice(index, 1);
      updateLog(null);
    }
	}
});


tarea = document.getElementById('tarea');
tarea.addEventListener("keypress", function(event){
  var key = event.keyCode;
  if(event.shiftKey == false && key == 13){
    event.preventDefault();
    // enter pressed 
    date = Date.now()
    
    updateLog({
      date: date,
      text: tarea.value
    });
    tarea.value = ''
  }
});


function updateLog(data){
  if (data != null){
    date = new Date(data.date)
    var datestr = date.toLocaleDateString();
    datestr = datestr.replace(/\//g , "-");
    newlogfile = path.join(docs, datestr + '.json');
    if(newlogfile != logfile){
      // date has changed
      logstoday = [data];
    }else{
      logstoday.push(data)
    }
    fs.writeFile(logfile, JSON.stringify(logstoday), function(err){
      console.log(err);
    })
  }else{
    fs.writeFile(logfile, JSON.stringify(logstoday), function(err){
      console.log(err);
    })
  }
  
}
