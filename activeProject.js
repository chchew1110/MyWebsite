var active;

function selectProject(id)
{
    if(active !== null)
    {
        $(active).css('background-color', ''); 
    }
    switch(id)
    {
        case "tictactoe":
            $("#previewpanel").load("../MyWebsite/TicTacToe/tictactoe.html");
            $('#tictactoe').css('background-color', 'black');
            active = '#'+id;
        break;
        case "bestline":
            $("#previewpanel").load("../MyWebsite/bestline.html");
            $('#bestline').css('background-color', 'black');
            active = '#'+id;
        break;
    }
}
