// VERSION*/
// B&B - Engine.CS.1.0
//
var finishedBuild = false;
var hasConsultants = false;
function shuffle(a) {
            for (let i = a.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [a[i], a[j]] = [a[j], a[i]];
            }
            return a;
        }

function rando() {
        //document.getElementById("dm_solution").innerHTML = "";

        shuffle(proc);
        document.getElementById("output").innerHTML = proc.slice(0, 4).join("");
        document.getElementById("remainder").innerHTML = proc.slice(4, 12).join("");

        shuffle(init);
        document.getElementById("a").innerHTML = init.slice(0,1);
        document.getElementById("dma").innerHTML = init.slice(0,1);

        shuffle(pivot);
        document.getElementById("b").innerHTML = pivot.slice(0,1);
        document.getElementById("dmb").innerHTML = pivot.slice(0,1);

        shuffle(c2);
        document.getElementById("c").innerHTML = c2.slice(0,1);
        document.getElementById("dmc").innerHTML = c2.slice(0,1);

        shuffle(persist);
        document.getElementById("d").innerHTML = persist.slice(0,1);
        document.getElementById("dmd").innerHTML = persist.slice(0,1);


}

function randcondition() {

        shuffle(ins);
//INJECTS
        //console.log("Inject Pool:");
        //console.log(ins);
        randins = Object.assign([], ins);
        randcons = Object.assign([], cons);
        //console.log("Inject Pool (Randomized):");
        //console.log(randins);

          //set init
        document.getElementById("injectbox").innerHTML = randins.slice(0,1);
        document.getElementById("injectbox").innerHTML += "<button id='clearcon' onclick='clearcondition()'> Clear Starting Condition </button>";
        console.log("Chosen Inject:");
        console.log(randins.slice(0,1));
        randins.shift();
        randcons.shift();
        //set consultants
        

        shuffle(randins);
        shuffle(randcons);
        console.log("Remaining Pool:");
        console.log(randins);


}

function clearcondition() {
document.getElementById("injectbox").innerHTML = "<button onClick=\"randcondition()\">Random Condition</button> <button onClick=\"customtoggle();boxtoggle('start');buildinjmenu()\">Custom Condition</button>";
randins = Object.assign([], ins);
console.log(randins.length);
}


s = 0
t = 1

u = 0
v = 1
function update_ins() {

    document.getElementById("e").innerHTML = randins.slice(s,t);
            s++
            t++
            if (t==randins.length+1)
              {s = 0; t = 1;}
        }

function rem_ins() {
        $.getJSON(cardlist, function(h) {
        $(e).html("<img style='width:200px;' src='"+h.grey+"'>")
        });
    }

    function update_con() {

      document.getElementById("f").innerHTML = randcons.slice(u,v);
              u++
              v++
              if (v==randcons.length+1)
                {u = 0; v = 1;}
          }
  
  function rem_con() {
          $.getJSON(cardlist, function(h) {
          $(f).html("<img style='width:200px;' src='"+h.green+"'>")
          });
      }

    function buildlist(item, i) {
      //console.log("buildList started");
      $.getJSON(cardlist, function(h) {
        //console.log(h);
        //console.log("This is what we are trying to build");
        $.each(h.data, function(i, x) {
          console.log("BUILDING");
          console.log(i);
          console.log(x);

  
              if (item=="proc" && x.type=="procedure") {
                  c ="procimg"
                  if (x.details==null  || x.details==""){
                       li = "<div class='"+item+"' id='"+x.id+"'><a href='"+x.image+"' data-lightbox='procedure"+x.id+"'><img class='"+c+"' src='"+x.image+"'></a></div>"
                     } else {
                       li = "<div class='"+item+"' id='"+x.id+"'><a href='"+x.image+"' data-lightbox='procedure"+x.id+"' data-title='"+x.details+"'><img class='"+c+"' src='"+x.image+"'></a></div>"
                     }
                  proc.push(li);
                 }

              if (item=="ins" && x.type=="inject") {
                  c="inject"
                  console.log("inject found");
                  if (x.details==null|| x.details==""){
                       li = "<div class='"+c+"'><a href='"+x.image+"' data-lightbox='inject"+x.id+"'><img src='"+x.image+"'></a></div>"
                     } else {
                       li = "<div class='"+c+"'><a href='"+x.image+"' data-lightbox='inject"+x.id+"' data-title='"+x.details+"'><img src='"+x.image+"'></a></div>"
                     }
                  ins.push(li)
                  randins = shuffle(ins)
                  }
                  


              if (item=="init" && x.type=="initial") {
                  c="scenimg"
                  if (x.details==null|| x.details==""){
                       li = "<a href='"+x.image+"' data-lightbox='initial"+x.id+"'><img class='"+c+"' src='"+x.image+"'></a>"
                     } else {
                       li = "<a href='"+x.image+"' data-lightbox='initial"+x.id+"' data-title='"+x.details+"'><img class='"+c+"' src='"+x.image+"'></a>"
                     }
                  init.push(li)
                  }
              if (item=="pivot" && x.type=="pivot") {
                  c="scenimg"
                  if (x.details==null|| x.details==""){
                       li = "<a href='"+x.image+"' data-lightbox='pivot"+x.id+"'><img class='"+c+"' src='"+x.image+"'></a>"
                     } else {
                       li = "<a href='"+x.image+"' data-lightbox='pivot"+x.id+"' data-title='"+x.details+"'><img class='"+c+"' src='"+x.image+"'></a>"
                     }
                  pivot.push(li)
                  }
              if (item=="c2" && x.type=="c2") {
                  c="scenimg"
                  if (x.details==null|| x.details==""){
                       li = "<a href='"+x.image+"' data-lightbox='c2"+x.id+"'><img class='"+c+"' src='"+x.image+"'></a>"
                     } else {
                       li = "<a href='"+x.image+"' data-lightbox='c2"+x.id+"' data-title='"+x.details+"'><img class='"+c+"' src='"+x.image+"'></a>"
                     }
                  c2.push(li)
                  }
              if (item=="persist" && x.type=="persist") {
                  c="scenimg"
                  if (x.details==null|| x.details==""){
                      li = "<a href='"+x.image+"' data-lightbox='persist"+x.id+"'><img class='"+c+"' src='"+x.image+"'></a>"
                    } else {
                      li = "<a href='"+x.image+"' data-lightbox='persist"+x.id+"' data-title='"+x.details+"'><img class='"+c+"' src='"+x.image+"'></a>"
                    }
                  persist.push(li)
                  }

                  if (item=="cons" && x.type=="consultant") {
                    hasConsultants = true; //We have consultants if we reach here, so let the world know!
                    console.log("CONSULTANTS!");
                    c="consultant"
                    if (x.details==null|| x.details==""){
                         li = "<div class='"+c+"'><a href='"+x.image+"' data-lightbox='consultant"+x.id+"'><img src='"+x.image+"'></a></div>"
                       } else {
                         li = "<div class='"+c+"'><a href='"+x.image+"' data-lightbox='consultant"+x.id+"' data-title='"+x.details+"'><img src='"+x.image+"'></a></div>"
                       }
                    cons.push(li)
                    randcons = shuffle(cons)
                    }
  
                  //console.log("building list...");
              });
          });
      }

var cardlist;

var proc = []
var init = []
var pivot = []
var c2 = []
var persist = []
var ins = []
var cons = [];


$(document).ready(function() {

  // Determine Deck Selection
  deck = localStorage.getItem("deckKey");
  if (deck === null)
  {
    deck = "CoreV21";
    console.log("null deck, choosing default");
  }

  
    updatedeck(deck);
  
  //GetVersion
    $.getJSON(cardlist, function(h) {
          //console.log(h);
          $(version).append(h.title);
          $(date).append(h.revdate);
          });
  
  
   //BUILD LISTS
   cardtype = ["proc", "init", "pivot", "c2", "persist", "ins", "cons"];
   cardtype.forEach(buildlist);
   finishedBuild = true;
   //updatedeck(deck);


   
  });

//DEBUG CARD POOL:
/*
console.log(proc);
console.log(ins);
console.log(init);
console.log(persist);
console.log(c2);
console.log(pivot);
*/
console.log(ins);
console.log(cons);




