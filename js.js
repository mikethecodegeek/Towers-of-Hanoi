/**
 * Created by Admin on 4/13/16.
 */
$(document).ready(init());
function init() {
    tower();
   // makeDisks(3);
    var tower1 = $('.tower');
    tower1.on('click',function() {
        towerClick(this);
    });
  /*  function makeDisks(num) {
        var w = 130;
        for (var a=1; a<=num; a++){
            $('#tower1').append('<span id="disk"'+a+'>'+a+'</span>');
        }
        for (var b=a; b>0;b--){
            var w2 = w+'px';
            var disk= '#disk'+b;
            $(disk).css('background-color','red');
        }
    }*/
    function tower() {
        var selector = 0;
        var getdisk = $('#tower1 span');
        var topDisk;
        var wincount = 0;
        towerClick = function(data) {
            console.log(data.id);
            console.log(wincount);
            if (selector === 0 && data !== null) {
                selector = 1;
                topDisk = data.lastChild;
                getdisk = topDisk;
                if (data.id === 'tower3') {
                    wincount--;
                }
                return selector;
            }
            else {

               if(data.lastChild !== null) {
                   var highestTower = data.lastChild.textContent;
                   var diskData = parseInt(getdisk.textContent);
                   if (diskData>highestTower) {
                       $(data).append(getdisk);
                       if (data.id === 'tower3') {
                           wincount++;
                       };
                   }
               }
                else {
                   $(data).append(getdisk);
                   if (data.id === 'tower3'){
                       wincount++;
                   }

               }
                if (wincount==3) {
                    //alert('win');
                    $('#win').text('You Win!!!');
                }
                selector = 0;
                return selector;
            }
        };
        getClickState = function() {
            return selector;
        }

    }
}

