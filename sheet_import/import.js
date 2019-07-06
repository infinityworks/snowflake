const fs = require('fs');
if(typeof require !== 'undefined') XLSX = require('xlsx');

class Milestone {
    constructor() {
        this.summary = '',
        this.advSummary = '',
        this.signals = '',
        this.examples = '',
        this.advSignals = '',
        this.advExamples = ''
    }
}

class Track {
    constructor() {
        this.displayName = '',
        this.description = '',
        this.movieQuote = '',
        this.milestones = Array()
    }
}


var workbook = XLSX.readFile('../content.xlsx');
var sheet_name = workbook.SheetNames[1];
var worksheet = workbook.Sheets[sheet_name];

var columns = ['C', 'D', 'E', 'F', 'G', 'H'];
var tracks = Array();

for(var c in columns) {
    var column = columns[c];
    var t = new Track();
    tracks.push(t);
    t.displayName = worksheet[column + '4'].h;
    t.description = worksheet[column + '5'].h.replace(/\n/g, "</br>");
    t.movieQuote = worksheet[column + '6'].h;

    for(var level = 1;level < 6; level++) {
        var m = new Milestone();
        t.milestones.push(m);

        m.signals = worksheet[column + (level * 8)] ? worksheet[column + (level * 8)].h.replace(/\n/g, "</br>") : '';
        m.examples = worksheet[column + ((level * 8) + 2)] ? worksheet[column + ((level * 8) + 2)].h.replace(/\n/g, "</br>") : '';

        m.advSignals = worksheet[column + ((level * 8) + 4)] ? worksheet[column + ((level * 8) + 4)].h.replace(/\n/g, "</br>") : '';
        m.advExamples = worksheet[column + ((level * 8) + 6)] ? worksheet[column + ((level * 8) + 6)].h.replace(/\n/g, "</br>") : '';
    }
    console.log(t);
}

fs.writeFile("../tracks.json", JSON.stringify(tracks), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The file was saved!");
}); 