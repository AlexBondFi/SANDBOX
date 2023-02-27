1.  For buttons!!!
    font-size: inherit;
    font-family: inherit;

CTA - call to action - most brightest button

2. const scrollFunction = () => {
   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
   backButton.style.display = 'block'
   } else{
   backButton.style.display = 'none'
   }
   };

Next is the same as top:

// condition ? true : else

const scrollFunction = () => {
document.body.scrollTop > 200 || document.documentElement.scrollTop > 200 ? backButton.style.display = 'block' : backButton.style.display = 'none'
};

Using styles, if something is overritten, we can use for example if "display:none;" is overritten, we can use: "display:none!importamt;"

In mobile if you use Modals, make them fit all window. Use "min-hight" in that case. Height will grow with the content

!!! overscroll-behavior: none; - lock from overscroll !!!
