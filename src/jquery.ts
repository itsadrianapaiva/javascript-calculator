import $ from "jquery";

const white: string = 'white';
const lightGray: string = '#f0f0f0';
const darkGray: string = '#6c6c6c';
const black: string = '#1e1e1e';
const yellow: string = '#f99c14';

export const applyInitialStyles = (): void => {

    $('.container').css({
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        minHeight: '100vh',
        padding: '20px',
    });

    $('#calculator').css({
        padding: '20px',
        width: '320px',
        borderRadius: '20px',
        backgroundColor: black,
        marginTop: '20px',
    });

    $('#display').css({
        height: '120px',
        padding: '20px',
        marginBottom: '20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    });

    
    $('#answer').css({
        fontSize: '64px',
        color: white,
        fontWeight: '300',
        lineHeight: '1',
    });

    $('#expression').css({
        fontSize: '24px',
        color: darkGray,
        marginBottom: '8px',
    });

    $('.buttons').css({
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '12px',
    });

    $('.light-gray').css({
        backgroundColor: lightGray,
    });
    $('.dark-gray').css({
        backgroundColor: darkGray,
        color: white,
    });
    $('.yellow').css({
        backgroundColor: yellow,
        color: white,
    });

    $('button').css({
       height: '64px',
       fontSize: '24px',
       border: 'none',
       cursor: 'pointer',
       borderRadius: '50%',
       fontWeight: '500',
       transition: 'transform 0.1s ease-in-out',
    });

    $('button:hover').css({
        filter: 'brightness(70%)',
    });

    $('button:active').css({
        transform: 'scale(0.95)',
    });

    $('#zero').css({
        gridColumn: 'span 2',
        borderRadius: '32px',
        textAlign: 'center',
    });

}