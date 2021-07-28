import './style.scss';
import $ from 'jquery';



const links: string[] = ['about', 'products', 'contacts'];

links
    .map(name => `${name}-link`)
    .forEach((linkName: string, i: number) =>
        $(`#${linkName}`).on('click', () =>
            $('html, body').animate({
                scrollTop: $(`#${links[i]}`).offset().top - (window.screen.height / 100) * 12
            }, {
                duration: 400,
                easing: 'linear'
            })
        )
)
