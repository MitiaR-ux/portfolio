// home split text
const { animate, text, stagger } = anime
const { chars: chars1 } = text.split('.home__profession-1', {
    chars: true
})
const { chars: chars2 } = text.split('.home__profession-2', {
    chars: true
})

animate(chars1, {
    y: [
        { to: ['100%', '0%'] },
        { to: '-100%', delay: 4000, ease: 'in(3)' }
    ],
    duration: 900,
    ease: 'out(3)',
    delay: stagger(80),
    loop: true,
});
animate(chars2, {
    y: [
        { to: ['100%', '0%'] },
        { to: '-100%', delay: 4000, ease: 'in(3)' }
    ],
    duration: 900,
    ease: 'out(3)',
    delay: stagger(80),
    loop: true,
});



// work tabs

// const tabs = document.querySelectorAll('[data-target]'),
//     tabContents = document.querySelectorAll('[data-content]')

// tabs.forEach((tab) => {
//     tab.addEventListener('click', () => {
//         const targetSelector = tab.dataset.target,
//             targetContent = document.querySelector(targetSelector)

//         //   Disable all content and active tabs
//         tabContents.forEach((content) => content.classList.remove('work-active'))
//         tabs.forEach((t) => t.classList.remove('work-active'))

//         // Active the tab and corresponding content
//         tab.classList.add('work-active')
//         targetContent.classList.add('work-active')

//     })
// })


// service accordion

const clickbutton = () => {
    const copyBtn = document.getElementById('contact-btn')
const copyEmail = document.getElementById('contact-email').textContent

copyBtn.addEventListener('click', () => {
    navigator.clipboard.writeText(copyEmail).then(() => {
        copyBtn.innerHTML = 'Email copied <i class="ri-check-line"></i>'

        // restore the original text
        setTimeout(() => {
            copyBtn.innerHTML = 'Copy email <i class="ri-file-copy-line"></i>'
        }, 2000)

    })
})
}
// copy email in contact


// navigator