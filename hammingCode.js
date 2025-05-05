//===========================
//function (7,4) Hamming Code
//===========================
function hammingCode()
{
    //Transmitter: encoder
    var d7 = document.getElementById("digit7").value;
    var d6 = document.getElementById("digit6").value;
    var d5 = document.getElementById("digit5").value;
    var d3 = document.getElementById("digit3").value;
    //-----------------------------------------------
    var d4 = d7 ^ d6 ^ d5;
    var d2 = d7 ^ d6 ^ d3;
    var d1 = d7 ^ d5 ^ d3;
    var cword = d7 + d6 + d5 + d4 + d3 + d2 + d1;
    document.getElementById("codeWord").value = cword;
    //================================================
    //Noisy channel with probability of error 0.5
    var flipBit = Math.floor(Math.random()*14) + 1;
    switch(flipBit)
    {
        case 1: d1 = d1 ^ 1; break;
        case 2: d2 = d2 ^ 1; break;
        case 3: d3 = d3 ^ 1; break;
        case 4: d4 = d4 ^ 1; break;
        case 5: d5 = d5 ^ 1; break;
        case 6: d6 = d6 ^ 1; break;
        case 7: d7 = d7 ^ 1; break;
        case 8: break;
        case 9: break;
        case 10: break;
        case 11: break;
        case 12: break;
        case 13: break;
        case 14: break;
    }
    //================================================
    //Receiver: decoder
    cword = d7 + d6 + d5 + d4 + d3 + d2 + d1;
    document.getElementById("RXword").value = cword;
    var p1 = d7 ^ d5 ^ d3 ^ d1;
    var p2 = d7 ^ d6 ^ d3 ^ d2;
    var p4 = d7 ^ d6 ^ d5 ^ d4;
    //-----------------------------------------------
    if(p4 == 0 && p2 == 0 && p1 == 0)
    {
        document.getElementById("RXmsg").value = "OK";
        document.getElementsByClassName("msg")[0].style.backgroundColor="#008000";
        document.getElementById("cWord").value = cword;
        cword = d7 + d6 + d5 + d3;
        document.getElementById("rMessage").value = cword;

    }
    else if(p4 == 0 && p2 == 0 && p1 == 1)
    {
        document.getElementById("RXmsg").value = "error";
        document.getElementsByClassName("msg")[0].style.backgroundColor="#FF0000";
        cword = d7 + d6 + d5 + d4 + d3 + d2 + (d1^1);
        document.getElementById("cWord").value = cword;
        cword = d7 + d6 + d5 + d3;
        document.getElementById("rMessage").value = cword;
    }
    else if(p4 == 0 && p2 == 1 && p1 == 0)
    {
        document.getElementById("RXmsg").value = "error";
        document.getElementsByClassName("msg")[0].style.backgroundColor="#FF0000";
        cword = d7 + d6 + d5 + d4 + d3 + (d2^1) + d1;
        document.getElementById("cWord").value = cword;
        cword = d7 + d6 + d5 + d3;
        document.getElementById("rMessage").value = cword;
    }
    else if(p4 == 0 && p2 == 1 && p1 == 1)
    {
        document.getElementById("RXmsg").value = "error";
        document.getElementsByClassName("msg")[0].style.backgroundColor="#FF0000";
        cword = d7 + d6 + d5 + d4 + (d3^1) + d2 + d1;
        document.getElementById("cWord").value = cword;
        cword = d7 + d6 + d5 + (d3^1);
        document.getElementById("rMessage").value = cword;
    }
    else if(p4 == 1 && p2 == 0 && p1 == 0)
    {
        document.getElementById("RXmsg").value = "error";
        document.getElementsByClassName("msg")[0].style.backgroundColor="#FF0000";
        cword = d7 + d6 + d5 + (d4^1) + d3 + d2 + d1;
        document.getElementById("cWord").value = cword;
        cword = d7 + d6 + d5 + d3;
        document.getElementById("rMessage").value = cword;
    }
    else if(p4 == 1 && p2 == 0 && p1 == 1)
    {
        document.getElementById("RXmsg").value = "error";
        document.getElementsByClassName("msg")[0].style.backgroundColor="#FF0000";
        cword = d7 + d6 + (d5^1) + d4 + d3 + d2 + d1;
        document.getElementById("cWord").value = cword;
        cword = d7 + d6 + (d5^1) + d3;
        document.getElementById("rMessage").value = cword;
    }
    else if(p4 == 1 && p2 == 1 && p1 == 0)
    {
        document.getElementById("RXmsg").value = "error";
        document.getElementsByClassName("msg")[0].style.backgroundColor="#FF0000";
        cword = d7 + (d6^1) + d5 + d4 + d3 + d2 + d1;
        document.getElementById("cWord").value = cword;
        cword = d7 + (d6^1) + d5 + d3;
        document.getElementById("rMessage").value = cword;
    }
    else if(p4 == 1 && p2 == 1 && p1 == 1)
    {
        document.getElementById("RXmsg").value = "error";
        document.getElementsByClassName("msg")[0].style.backgroundColor="#FF0000";
        cword = (d7^1) + d6 + d5 + d4 + d3 + d2 + d1;
        document.getElementById("cWord").value = cword;
        cword = (d7^1) + d6 + d5 + d3;
        document.getElementById("rMessage").value = cword;
    }
}
