import React from 'react';
import styles from './SocialMedia.module.css';

const SocialMedia = ({ componentForUse }) => {
    const socImages = [
        {
            iconSrc: 'https://cdn-icons-png.flaticon.com/512/5968/5968896.png',
            iconAlt: 'github',
            href: 'https://github.com/TigranMets'
        },
        {
            iconSrc: 'https://www.instagram.com/static/images/ico/favicon-200.png/ab6eff595bb1.png',
            iconAlt: 'instagram',
            href: 'https://www.instagram.com/tigrankheranyan/'
        },

        {
            iconSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/LinkedIn_icon_circle.svg/2048px-LinkedIn_icon_circle.svg.png',
            iconAlt: 'linkedin',
            href: 'https://www.linkedin.com/in/tigran-kheranyan-65ab58202/'
        },
        {
            iconSrc: 'https://static.vecteezy.com/system/resources/previews/027/395/710/non_2x/twitter-brand-new-logo-3-d-with-new-x-shaped-graphic-of-the-world-s-most-popular-social-media-free-png.png',
            iconAlt: 'X',
            href: 'https://twitter.com/TigranMetc2'
        },
        {
            iconSrc: 'https://cdn3.iconfinder.com/data/icons/popular-services-brands-vol-2/512/stackoverflow-512.png',
            iconAlt: 'stackoverflow',
            href: 'https://stackoverflow.com/users/16537333/%d5%8f%d5%ab%d5%a3%d6%80%d5%a1%d5%b6-%d5%84%d5%a5%d5%ae'
        },
        {
            iconSrc: 'https://images.chesscomfiles.com/uploads/v1/images_users/tiny_mce/PedroPinhata/phpkXK09k.png',
            iconAlt: 'chess.com',
            href: 'https://www.chess.com/member/tigrankheranyan07'
        },
    ];
    return <div className={`${styles.socialMedia} ${componentForUse === 'footer' ? styles.footerSocialMedia : styles.greetingSocialMedia}`}>
        {socImages.map(socialIcon => <a href={socialIcon.href} key={socialIcon.iconAlt}><img alt={socialIcon.iconAlt} src={socialIcon.iconSrc} /></a>)}
    </div>
}

export default SocialMedia;