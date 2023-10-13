////////////////////////////////////////
///////////////////////////////////////
if( event.willCommit ) { 
    if(event.value == "") this.resetForm(["DeptContact","DeptEmail","DeptNumber"]); else SetFieldValues(event.value); 
}


// Place all pre-population data into a single data structure 
var DeptData = { Accounting:{ contact: "Steala Damuni", email: "accounting@mycomp.com", deptnum: "cmp1234" }, Engineering:{ contact: "Frank N. Stien", email: "engineering@mycomp.com", deptnum: "eng1234" }, Marketing :{ contact: "Shelly Oughtbuks", email: "marketing@mycomp.com", deptnum: "mkt1234" }, ITSupport:{ contact: "Goah Wei", email: "it@mycomp.com", deptnum: "its1234" }}; 
function SetFieldValues(cDeptName) { 
    // Populate fields with values from the Department Data Object 
    this.getField("DeptContact").value = DeptData[cDeptName].contact; 
    this.getField("DeptEmail").value = DeptData[cDeptName].email; 
    this.getField("DeptNumber").value = DeptData[cDeptName].deptnum; 
} 
////////////////////////////////////////
///////////////////////////////////////

////////////////////////////////////////
/////////////////MY code//////////////////////

//Place at the combo box field
if( event.willCommit ) { 
    if(event.value == "") this.resetForm(["ProjectTitle"]); else SetFieldValues(event.value); 
}

///////////////////////////////////////////////////////////////////////////////////////

// Acrobat 7 Pro: The “Advanced > JavaScript > Document JavaScripts…” menu item 文件等級Javascript, add a new function as SetFieldValues  (excel forumal =CONCATENATE("""",A1,""":{title:""",B1,""",university:""",C1,"""},")
var topicData = {
"HLCA/E-107/23": "107 topic",
"HLCA/E-108/23": "108 topic",
"HLCA/E-109/23": "109 topic",
"HLCA/E-110/23": "110 topic",
};

function SetFieldValues(cTopic) { 
    this.getField("ProjectTitle").value = topicData[cTopic].title; 
	this.getField("CoordinatingUniversity").value = topicData[cTopic].university; 
} 


