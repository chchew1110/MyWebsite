var active;

function selectProject(id)
{
    if(active !== null)
    {
          document.getElementById("previewpanel").innerHTML = "";     
    }
    switch(id)
    {
        case "tictactoe":
            document.getElementById("previewpanel").innerHTML = "<p>Tic Tac Toe thingy</p>";
        break;
        case "musicnotes":
            document.getElementById("previewpanel").innerHTML = "<p>Music Note thingy</p>";
        break;
    }
}