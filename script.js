let tabItems = document.querySelectorAll('.tab-item')
let tabContentItems = document.querySelectorAll('.tab-content-item')
console.log(tabItems,tabContentItems)

function removeBorder() {
    tabItems.forEach(item => item.classList.remove('border'))
}
function removeShow() {
    tabContentItems.forEach(item => item.classList.remove('show'))
}
tabItems.forEach(item => item.addEventListener('click',selectItem))
function selectItem(e) {
    removeBorder()
    removeShow()
    this.classList.add('border')
    const content = document.querySelector(`#${this.id}-content`)
    content.classList.add('show')
    if(content.id === 'tab-1-content') {
        document.querySelector('video').play()
    }
}