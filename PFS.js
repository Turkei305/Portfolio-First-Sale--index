const hamburgerEF = document.querySelector('.hamburger-functional');
const hamburgerE = document.querySelector('.hamburger');
const hamburgerLine1 = document.querySelector('.hamburger1');
const hamburgerLine2 = document.querySelector('.hamburger2');
const hamburgerLine3 = document.querySelector('.hamburger3');

const hamburgerLine1NF = document.querySelector('.hamburger1-NF');
const hamburgerLine2NF = document.querySelector('.hamburger2-NF');
const hamburgerLine3NF = document.querySelector('.hamburger3-NF');

const header = document.querySelector('.header');
const hero = document.querySelector('.hero');


console.log(document.querySelector('.language').innerHTML);

if (!document.querySelector('.gallery-category-active')){
    const category1 = document.querySelector('.gallery-category1');
    category1.classList.add('gallery-category-active');

    let categoryWidth = window.getComputedStyle(category1).width;

    console.log(categoryWidth)

    const toggleUnderline = document.querySelector('.toggle-underline');
    toggleUnderline.style.width = categoryWidth;

    rect = category1.getBoundingClientRect();
    const xCoordinate = rect.x;
    const style = window.getComputedStyle(category1);
    const width = style.width;
    const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;
    toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;

};


if (!document.querySelector('.category-items-container-toggled')){
    const category1Container = document.querySelector('.category1-items-container');
    category1Container.classList.add('category-items-container-toggled');
    const portrait = category1Container.querySelector('.portrait-mode');
    portrait.classList.add('category-toggled-version');
    console.log(portrait);
    
    document.querySelector('.landscape-title').style.fontWeight = '300';
    document.querySelector('.portrait-title').style.fontWeight = 'bold';


};


function galleryRestart(){
    const category1Container = document.querySelector('.category1-items-container');
    category1Container.classList.add('category-items-container-toggled');
    const portrait = category1Container.querySelector('.portrait-mode');
    portrait.classList.add('category-toggled-version');
    const landscape = category1Container.querySelector('.landscape-mode');
    landscape.classList.remove('category-toggled-version');

    const toggleContainer = document.querySelector('.gallery-bar-toggle-container');
    toggleContainer.style.justifyContent = ' flex-end';
    
    document.querySelector('.landscape-title').style.fontWeight = '300';
    document.querySelector('.portrait-title').style.fontWeight = 'bold';

    const category2Container = document.querySelector('.category2-items-container');
    category2Container.classList.remove('category-items-container-toggled');

    const category3Container = document.querySelector('.category3-items-container');
    category3Container.classList.remove('category-items-container-toggled');    
    
    const category4Container = document.querySelector('.category4-items-container');
    category4Container.classList.remove('category-items-container-toggled');    

    const category5Container = document.querySelector('.category5-items-container');
    category5Container.classList.remove('category-items-container-toggled');  
};


function currentLanguage(){

    let languageStored = JSON.parse(localStorage.getItem('previousLanguage')) || 'English';

    if (languageStored =='Arabic') {

        document.body.style.cssText = "background-color: #0D0D0D;  display:flex; flex-direction: column; align-items: center; margin-left: 0px; margin-right: 0px; margin-top: 0px; font-family: 'Noto Sans Arabic'; color: white; overflow-x: hidden; ";

        console.log('English is current, now switching to Arabic');

        const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed')  ;
        headerItemsContainer.style.flexDirection = 'row-reverse';

        const headerLeftBox = document.querySelector(".header-left-box");
        headerLeftBox.style.flexDirection =  'row-reverse';

        const portfolioName = document.querySelector('.name');
        portfolioName.innerHTML = 'خالد';

        portfolioName.style.marginLeft = '0px';
        portfolioName.style.marginRight = 'clamp(0px,1.86vw,20px)';

        const headerRightBox = document.querySelector(".header-right-box");
        headerRightBox.style.flexDirection =  'row-reverse';

        const langButton = document.querySelector('.language');
        langButton.innerHTML = 'EN';

        hamburgerLine1.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine2.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine3.style.borderRadius = '50px 0px 0px 0px';

        hamburgerLine1NF.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine2NF.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine3NF.style.borderRadius = '50px 0px 0px 0px';

        const infoCardContainer = document.querySelector('.translateable1');
        infoCardContainer.classList.add('info-card-items-container-arabic');
        infoCardContainer.classList.remove('info-card-items-container');

        const infoCardText = document.querySelector('.translateable2');
        infoCardText.classList.add('info-text-arabic');
        infoCardText.classList.remove('info-text');

        const infoRole = document.querySelector('.translateable3');
        infoRole.innerHTML = 'مصور مناسبات';
        infoRole.classList.add('role-arabic');
        infoRole.classList.remove('role');
        
        const infoName = document.querySelector('.translateable4');
        infoName.innerHTML = 'خالد القثامي';
        infoName.classList.add('info-name-arabic');
        infoName.classList.remove('info-name');

        const detailPhrase1 = document.querySelector('.detail1');
        detailPhrase1.innerHTML = '📸جميع المناسبات';

        const detailPhrase2 = document.querySelector('.detail2');
        detailPhrase2.innerHTML = '📍الطائف و مكة المكرمة';

        const thumbnail = document.querySelector('.thumbnail');
        thumbnail.classList.add('thumbnail-arabic');
        thumbnail.classList.remove('thumbnail');

        const thumbnailTextArabic = document.querySelector('.thumbnail-text');
        thumbnailTextArabic.classList.add('thumbnail-text-container-arabic');
        thumbnailTextArabic.classList.remove('thumbnail-text');
        
        const switchHook1A = document.querySelector('.switch-hook1');
        switchHook1A.classList.add('switch-hook1-arabic');
        switchHook1A.classList.remove('switch-hook1');;
        switchHook1A.innerHTML = "<span class = 'sha1'>تحتاج تغطية</span> <span class = 'sha2'>فوتوغرافية لعرسك؟</span>";
    
        const switchHookDescriptionA = document.querySelector('.switch-hook-description');
        switchHookDescriptionA.classList.add('switch-hook-description-arabic');
        switchHookDescriptionA.classList.remove('switch-hook-description');
        switchHookDescriptionA.innerHTML = "<span class= 'ashd1'>إحجز مكالمة سريعة لمناقشة</span> <span class= 'ashd2'> الوقت و المكان وأهم</span><span class= 'ashd3'> .التفاصيل لتغطية فرحك</span> <span class= 'ashd4'>سابق بحجز تاريخك </span> <span class= 'ashd4'>!المناسب</span>";

        const ctaContent = document.querySelector('.cta-content');
        ctaContent.classList.remove('cta-content');
        ctaContent.classList.add('cta-content-arabic');
        ctaContent.innerHTML = '<div class="cta-content-arabic"><p>إحجز الآن</p> <img class="Polygon" src="ImagesFolder/Polygon-arabic.svg" alt=""> </div>';

        const servicesIntroductionA = document.querySelector('.services-introduction');
        servicesIntroductionA.classList.remove('services-introduction');
        servicesIntroductionA.classList.add('services-introduction-arabic');

        const servicesIntroductionTitleA = document.querySelector('.services-introduction-title');
        servicesIntroductionTitleA.classList.remove('services-introduction-title');
        servicesIntroductionTitleA.classList.add('services-introduction-title-arabic');
        servicesIntroductionTitleA.innerHTML = 'خدمات أوفرها لك';

        const servicesIntroductionDescriptionA = document.querySelector('.services-introduction-description');
        servicesIntroductionDescriptionA.classList.remove('services-introduction-description');
        servicesIntroductionDescriptionA.classList.add('services-introduction-description-arabic');
        servicesIntroductionDescriptionA.innerHTML = '.حلول تصويرية مصممة لتلبي إحتياجاتك الفريدة و تنفيذ مهامك';

        const card1HolderItemsContainerA = document.querySelector('.canvas-card1-holder-items-container');
        card1HolderItemsContainerA.classList.remove('canvas-card1-holder-items-container');
        card1HolderItemsContainerA.classList.add('canvas-card1-holder-items-container-arabic');

        const card2HolderItemsContainerA = document.querySelector('.canvas-card2-holder-items-container');
        card2HolderItemsContainerA.classList.remove('canvas-card2-holder-items-container');
        card2HolderItemsContainerA.classList.add('canvas-card2-holder-items-container-arabic');        

        const card3HolderItemsContainerA = document.querySelector('.canvas-card3-holder-items-container');
        card3HolderItemsContainerA.classList.remove('canvas-card3-holder-items-container');
        card3HolderItemsContainerA.classList.add('canvas-card3-holder-items-container-arabic');               

        const serviceCard1CanvasA = document.querySelector('.service-card1-canvas');
        serviceCard1CanvasA.classList.remove('service-card1-canvas')
        serviceCard1CanvasA.classList.add('service-card1-canvas-arabic');

        const serviceCard2CanvasA = document.querySelector('.service-card2-canvas');
        serviceCard2CanvasA.classList.remove('service-card2-canvas')
        serviceCard2CanvasA.classList.add('service-card2-canvas-arabic');

        const serviceCard3CanvasA = document.querySelector('.service-card3-canvas');
        serviceCard3CanvasA.classList.remove('service-card3-canvas')
        serviceCard3CanvasA.classList.add('service-card3-canvas-arabic');

        const serviceCard1CanvasExtensionA = document.querySelector('.service-card1-canvas-extension');
        serviceCard1CanvasExtensionA.classList.remove('service-card1-canvas-extension');
        serviceCard1CanvasExtensionA.classList.add('service-card1-canvas-extension-arabic');
        serviceCard1CanvasExtensionA.innerHTML = ' <div class="cta-service-content-arabic"> <img  src="ImagesFolder/Polygon-arabic.svg" class="service-polygon"> <p>إحجز الخدمة</p></div>';
        
        const serviceCard1TextA = document.querySelector('.service-card1-text');
        serviceCard1TextA.classList.remove('service-card1-text');
        serviceCard1TextA.classList.add('service-card1-text-arabic');
        

        const serviceCard1Title = document.querySelector('.service-card1-title');
        serviceCard1Title.classList.remove('service-card1-title');
        serviceCard1Title.classList.add('service-card1-title-arabic');
        serviceCard1Title.innerHTML = "تصوير إستديو <img src='ImagesFolder/studio-shoot-icon-arabic.png' class='studio-shoot-icon-arabic'>";

        const serviceCard1Description = document.querySelector('.service-card1-description');
        serviceCard1Description.classList.remove('service-card1-description');
        serviceCard1Description.classList.add('service-card1-description-arabic');
        serviceCard1Description.innerHTML = "إلتقط المظهر المناسب لك";


        const serviceCard2CanvasExtensionA = document.querySelector('.service-card2-canvas-extension');
        serviceCard2CanvasExtensionA.classList.remove('service-card2-canvas-extension');
        serviceCard2CanvasExtensionA.classList.add('service-card2-canvas-extension-arabic');
        serviceCard2CanvasExtensionA.innerHTML = ' <div class="cta-service-content-arabic"> <img  src="ImagesFolder/Polygon-arabic.svg" class="service-polygon"> <p>إحجز الخدمة</p></div>';
        
        const serviceCard2TextA = document.querySelector('.service-card2-text');
        serviceCard2TextA.classList.remove('service-card2-text');
        serviceCard2TextA.classList.add('service-card2-text-arabic');
        

        const serviceCard2Title = document.querySelector('.service-card2-title');
        serviceCard2Title.classList.remove('service-card2-title');
        serviceCard2Title.classList.add('service-card2-title-arabic');
        serviceCard2Title.innerHTML = " تصوير المنتجات <img src='ImagesFolder/studio-shoot-icon-arabic.png' class='studio-shoot-icon-arabic'>";

        const serviceCard2Description = document.querySelector('.service-card2-description');
        serviceCard2Description.classList.remove('service-card2-description');
        serviceCard2Description.classList.add('service-card2-description-arabic');
        serviceCard2Description.innerHTML = "سلط الضوء على منتجاتك";


        const serviceCard3CanvasExtensionA = document.querySelector('.service-card3-canvas-extension');
        serviceCard3CanvasExtensionA.classList.remove('service-card3-canvas-extension');
        serviceCard3CanvasExtensionA.classList.add('service-card3-canvas-extension-arabic');
        serviceCard3CanvasExtensionA.innerHTML = ' <div class="cta-service-content-arabic"> <img  src="ImagesFolder/Polygon-arabic.svg" class="service-polygon"> <p>إحجز الخدمة</p></div>';
        
        const serviceCard3TextA = document.querySelector('.service-card3-text');
        serviceCard3TextA.classList.remove('service-card3-text');
        serviceCard3TextA.classList.add('service-card3-text-arabic');
        

        const serviceCard3Title = document.querySelector('.service-card3-title');
        serviceCard3Title.classList.remove('service-card3-title');
        serviceCard3Title.classList.add('service-card3-title-arabic');
        serviceCard3Title.innerHTML = "تغطية المهرجانات  <img src='ImagesFolder/studio-shoot-icon-arabic.png' class='studio-shoot-icon-arabic'>";

        const serviceCard3Description = document.querySelector('.service-card3-description');
        serviceCard3Description.classList.remove('service-card3-description');
        serviceCard3Description.classList.add('service-card3-description-arabic');
        serviceCard3Description.innerHTML = "خلد الأحداث";

        const canvasItemsContainerA = document.querySelector('.canvas-items-container');
        canvasItemsContainerA.classList.remove('canvas-items-container');
        canvasItemsContainerA.classList.add('canvas-items-container-arabic');
        canvasItemsContainerA.innerHTML = "<div class='category-arabic'>المجوهرات <img src='ImagesFolder/jewelry-icon.png' class='jewelry-icon'></div> <div class='epp-checkmark-arabic'  onclick='eppPopUp () '>أخلاقيات تصوير المنتج <img src='ImagesFolder/epp-checkmark-icon.png' class='epp-checkmark-icon'></div>";

        const ePPTitleA = document.querySelector('.epp-title');
        ePPTitleA.classList.remove('epp-title');
        ePPTitleA.classList.add('epp-title-arabic');
        ePPTitleA.innerHTML = 'أخلاقيات تصوير المنتج';

        const ePPPoint1A = document.querySelector('.epp-point1');
        ePPPoint1A.classList.remove('epp-point1');
        ePPPoint1A.classList.add('epp-point1-arabic');   
        ePPPoint1A.innerHTML = "<div class='epp-point1-text-arabic'><div class = 'epp-point1-arabic-l1'> الغرض من تصوير المنتج <strong style = 'margin-left: clamp(0px , 1.4vw , 7.126px);'> الصدق هو أولوية: ليس</strong> </div> <div class = 'epp-point1-arabic-l2'> <strong> جعله يبدو أفضل من صورته الحقيقية مما قد </strong> </div> <div class = 'epp-point1-arabic-l3'>يخدع عملائه المحتملين, بل إظهاره بطريقة يكون فيها  </div> <div class = 'epp-point1-arabic-l4'>  .معروض بوضوح و بطريقة تمثل العلامة التجارية</div> </div> <div class='bulletpoint1'></div>";

        const ePPPoint2A = document.querySelector('.epp-point2');
        ePPPoint2A.classList.remove('epp-point2');
        ePPPoint2A.classList.add('epp-point2-arabic');   
        ePPPoint2A.innerHTML = "<div class='epp-point2-text-arabic'> <div class = 'epp-point2-arabic-l1'> لن تعزز اللمسات التعديلية أثناء التصوير   <strong style = 'margin-left: clamp(0px , 1.4vw , 7.126px);'>  :التعديل   </strong> </div> <div class = 'epp-point2-arabic-l2'> أو بعده نقاط قوة المنتج أو تخفي نقاط ضعفه, ولكن</div> <div class = 'epp-point2-arabic-l3'>تستهدف المنطقة أو الأشياء المحيطة بالمنتج (مثل </div> <div class = 'epp-point2-arabic-l4'>الإضاءة ولون الخلفية أو ملمسها وما إلى ذلك) لتحقيق </div> <div class = 'epp-point2-arabic-l5'>الهدف الرئيسي المتمثل في عرض منتجك بوضوح و</div> <div class = 'epp-point2-arabic-l6'>.بطريقة تمثل أسلوب العلامة التجارية</div> </div> <div class='bulletpoint2'></div>";

        const ePPPopUpDoneA = document.querySelector('.pop-up-done');
        ePPPopUpDoneA.classList.remove('pop-up-done');
        ePPPopUpDoneA.classList.add('pop-up-done-arabic');        
        ePPPopUpDoneA.innerHTML = 'أتفق معك';

        const counterSectionTitleA = document.querySelector('.experience-introduction-title');
        counterSectionTitleA.classList.remove('experience-introduction-title');
        counterSectionTitleA.classList.add('experience-introduction-title-arabic');
        counterSectionTitleA.innerHTML = 'الخبرة المكتسبة';

        const counterSectionDescriptionA = document.querySelector('.experience-introduction-description');
        counterSectionDescriptionA.classList.remove('experience-introduction-description')
        counterSectionDescriptionA.classList.add('experience-introduction-description-arabic')
        counterSectionDescriptionA.innerHTML = 'تسليط الضوء على رحلتي كمصور';

        const counterCard1NumberA = document.querySelector('.counter-card1-number');
        counterCard1NumberA.classList.remove('counter-card1-number');
        counterCard1NumberA.classList.add('counter-card1-number-arabic');
        counterCard1NumberA.innerHTML = '+١٠';
        
        const counterCard1TitleA = document.querySelector('.counter-card1-title');
        counterCard1TitleA.classList.remove('counter-card1-title');
        counterCard1TitleA.classList.add('counter-card1-title-arabic');
        counterCard1TitleA.innerHTML = 'سنوات';

        const counterCard1DescriptionA = document.querySelector('.counter-card1-description');
        counterCard1DescriptionA.classList.remove('counter-card1-description');
        counterCard1DescriptionA.classList.add('counter-card1-description-arabic');
        counterCard1DescriptionA.innerHTML = "<p class = 'cc1al1'>  أكثر من ١٠ سنوات من النشاط الفوتوغرافي</p>  <p class = 'cc1al2' > .في عدة مجالات </p>";
        
        const counterCard2NumberA = document.querySelector('.counter-card2-number');
        counterCard2NumberA.classList.remove('counter-card2-number');
        counterCard2NumberA.classList.add('counter-card2-number-arabic');
        counterCard2NumberA.innerHTML = '+١١٣';
        
        const counterCard2TitleA = document.querySelector('.counter-card2-title');
        counterCard2TitleA.classList.remove('counter-card2-title');
        counterCard2TitleA.classList.add('counter-card2-title-arabic');
        counterCard2TitleA.innerHTML = 'عملاء تصوير';

        const counterCard2DescriptionA = document.querySelector('.counter-card2-description');
        counterCard2DescriptionA.classList.remove('counter-card2-description');
        counterCard2DescriptionA.classList.add('counter-card2-description-arabic');
        counterCard2DescriptionA.innerHTML = "<p class = 'cc1al1'>إكتسبت أكثر من ١١٣ عميل لخدمات التصوير</p>  <p class = 'cc1al2' > .عبر الوقت و الكثير منهم متكررين</p>";  
        
        const counterCard3NumberA = document.querySelector('.counter-card3-number');
        counterCard3NumberA.classList.remove('counter-card3-number');
        counterCard3NumberA.classList.add('counter-card3-number-arabic');
        counterCard3NumberA.innerHTML = '+٢٣K';
        
        const counterCard3TitleA = document.querySelector('.counter-card3-title');
        counterCard3TitleA.classList.remove('counter-card3-title');
        counterCard3TitleA.classList.add('counter-card3-title-arabic');
        counterCard3TitleA.innerHTML = 'صورة ملتقطة';

        const counterCard3DescriptionA = document.querySelector('.counter-card3-description');
        counterCard3DescriptionA.classList.remove('counter-card3-description');
        counterCard3DescriptionA.classList.add('counter-card3-description-arabic');
        counterCard3DescriptionA.innerHTML = "<p class = 'cc1al1'>إلتقطت أكثر من ٢٣ ألف صورة فوتوغرافية</p>  <p class = 'cc1al2' >.عبر السنوات</p>";      

        const bannerSectionTitleA = document.querySelector('.banner-introduction-title');
        bannerSectionTitleA.classList.remove('banner-introduction-title');
        bannerSectionTitleA.classList.add('banner-introduction-title-arabic');
        bannerSectionTitleA.innerHTML = 'مهرجانات';

        const bannerSectionDescriptionA = document.querySelector('.banner-introduction-description');
        bannerSectionDescriptionA.classList.remove('banner-introduction-description');
        bannerSectionDescriptionA.classList.add('banner-introduction-description-arabic');
        bannerSectionDescriptionA.innerHTML = '.بعض تغطياتي الفوتوغرافية للمهرجانات';

        const bannerSectionCommentA = document.querySelector('.banner-comment');
        bannerSectionCommentA.classList.remove('banner-comment');
        bannerSectionCommentA.classList.add('banner-comment-arabic');
        bannerSectionCommentA.innerHTML = '.و غيرها العديد';


        const galleryIntroductionTitleA = document.querySelector('.gallery-introduction-title');
        galleryIntroductionTitleA.classList.remove('gallery-introduction-title');
        galleryIntroductionTitleA.classList.add('gallery-introduction-title-arabic');
        galleryIntroductionTitleA.innerHTML = 'نختصر الكلمات و نترك الصور تتحدث';

        const galleryIntroductionDescriptionA = document.querySelector('.gallery-introduction-description');
        galleryIntroductionDescriptionA.classList.remove('gallery-introduction-description');
        galleryIntroductionDescriptionA.classList.add('gallery-introduction-description-arabic');
        galleryIntroductionDescriptionA.innerHTML = 'لا تتردد في التمرير بمعرض الصور التي إلتقطتها كلها بنفسي ';

        const galleryHeaderContainerA = document.querySelector('.gallery-categories-container');
        galleryHeaderContainerA.classList.remove('gallery-categories-container');
        galleryHeaderContainerA.classList.add('gallery-categories-container-arabic');

        const galleryHeaderItem1A = document.querySelector('.gallery-category1');
        galleryHeaderItem1A.innerHTML = 'أفراح';

        const galleryHeaderItem2A = document.querySelector('.gallery-category2');
        galleryHeaderItem2A.innerHTML = 'منتجات';

        const galleryHeaderItem3A = document.querySelector('.gallery-category3');
        galleryHeaderItem3A.innerHTML = 'أشخاص';

        const galleryHeaderItem4A = document.querySelector('.gallery-category4');
        galleryHeaderItem4A.innerHTML = 'أماكن';

        const galleryHeaderItem5A = document.querySelector('.gallery-category5');
        galleryHeaderItem5A.innerHTML = 'أحداث';

        const galleryLandscapeTitleA = document.querySelector('.landscape-title');
        galleryLandscapeTitleA.innerHTML = 'أفقية';

        const galleryPortraitTitleA = document.querySelector('.portrait-title');
        galleryPortraitTitleA.innerHTML = 'عامودية';

        const galleryFooterDescriptionA = document.querySelector('.gallery-footer-text');
        galleryFooterDescriptionA.innerHTML = "<p class = 'gdl1a' style = 'text-align:right;'> ,جميع صور المعرض محفوظة بحقوق الطبع والنشر لخالد القثامي. للاستفسار</p><p class = 'gdl2a' style = 'text-align:right;'>  <strong>Khaledalgethami@gmail.com</strong> : يحبذ التواصل عبر البريد الإلكتروني</p> ";


        let categoryWidth = window.getComputedStyle(galleryHeaderItem1A).width;
        console.log(categoryWidth)

        const toggleUnderline = document.querySelector('.toggle-underline');
        toggleUnderline.style.width = categoryWidth;


        rect = galleryHeaderItem1A.getBoundingClientRect();
        const xCoordinate = rect.x;
        const style = window.getComputedStyle(galleryHeaderItem1A);
        const width = style.width;
        const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;
        toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;

        document.querySelector('.gallery-category-active').classList.remove('gallery-category-active');
        galleryHeaderItem1A.classList.add('gallery-category-active');

        galleryRestart();

        const footerTitleA = document.querySelector('.footer-title');
        footerTitleA.innerHTML =  'تريد كيفية الحجز؟' ;
        footerTitleA.classList.add('arabic-text');

        const footerSubTitleA = document.querySelector('.footer-subtitle');
        footerSubTitleA.innerHTML = 'إليك سهولة عملية الحجز الخاصة بي:'
        footerSubTitleA.classList.add('arabic-text');

        const footerSubTitleDescriptionA = document.querySelector('.footer-subtitle-description');
        footerSubTitleDescriptionA.innerHTML = 'أكد عملية الحجز ب٣ خطوات فقط!';
        footerSubTitleDescriptionA.classList.add('arabic-text');

        const footerSectionContainerA = document.querySelector('.footer-visual-explanation');
        footerSectionContainerA.classList.add('arabic-text');

        const stepNumber1A = document.querySelector('.step1-number');
        stepNumber1A.innerHTML = '١.';
        stepNumber1A.classList.add('arabic-text');

        const step1ImageA = document.querySelector('.step1-image');
        step1ImageA.src = 'ImagesFolder/step1-image-arabic.png';
        step1ImageA.classList.add('arabic-text');        

        const step1TitleA = document.querySelector('.step1-title')
        step1TitleA.innerHTML = 'إضغط على زر إحجز الآن.';
        step1TitleA.classList.add('arabic-text');

        const step1DescriptionA = document.querySelector('.step1-description');
        step1DescriptionA.innerHTML = 'إضغط على زر إحجز الآن أدناه.';
        step1DescriptionA.classList.add('arabic-text');

        const stepNumber2A = document.querySelector('.step2-number');
        stepNumber2A.innerHTML = '٢.';
        stepNumber2A.classList.add('arabic-text');
        
        const step2TitleA = document.querySelector('.step2-title')
        step2TitleA.innerHTML = 'إملئ الفراغات و قدِم.';
        step2TitleA.classList.add('arabic-text');

        const step2DescriptionA = document.querySelector('.step2-description');
        step2DescriptionA.innerHTML = 'في الصفحة التالية إملئ الفراغات و إضغط الزر الأصفر.';
        step2DescriptionA.classList.add('arabic-text')

        const stepNumber3A = document.querySelector('.step3-number');
        stepNumber3A.innerHTML = '٣.';
        stepNumber3A.classList.add('arabic-text');
        
        const step3TitleA = document.querySelector('.step3-title')
        step3TitleA.innerHTML = 'إضغط زر الإرسال.';
        step3TitleA.classList.add('arabic-text');

        const step3DescriptionA = document.querySelector('.step3-description');
        step3DescriptionA.innerHTML = ' سيتم توجيهك إلى الواتساب كل ما عليك فعله هو الإرسال فقط.';
        step3DescriptionA.classList.add('arabic-text');

        const footerDescriptionA = document.querySelector('.footer-visual-explanation-description');
        footerDescriptionA.innerHTML = 'من خلال هذا الزر ستبدأ بالخطوى الأولى, لا تتردد إحجز الآن!';
        footerDescriptionA.classList.add('arabic-text');

        const footerCTAContentA = document.querySelector('.cta-content');
        footerCTAContentA.innerHTML = '<div class="cta-content-arabic"><p>إحجز الآن</p> <img class="Polygon" src="ImagesFolder/Polygon-arabic.svg" alt=""> </div>';


        language = 'Arabic';
        console.log('Switched Language to Arabic');

        localStorage.setItem('previousLanguage', JSON.stringify(language));
   

    }else if (languageStored == 'English'){

        document.body.style.cssText = "background-color: #0D0D0D; display: flex;flex-direction: column; align-items: center; margin-left: 0px; margin-right: 0px; margin-top: 0px; font-family: Inter; color: white; overflow-x: hidden;";

        const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed')  ;
        headerItemsContainer.style.flexDirection = 'row';

        const headerLeftBox = document.querySelector(".header-left-box");
        headerLeftBox.style.flexDirection =  'row';

        const portfolioName = document.querySelector('.name');
        portfolioName.innerHTML = 'Khalid';

        portfolioName.style.marginRight = '0px';
        portfolioName.style.marginLeft = 'clamp(0px,1.86vw,20px)';

        const headerRightBox = document.querySelector(".header-right-box");
        headerRightBox.style.flexDirection =  'row';

        const langButton = document.querySelector('.language');
        langButton.innerHTML = 'ع';

        hamburgerLine1.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine2.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine3.style.borderRadius = '0px 50px 0px 0px';

        hamburgerLine1NF.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine2NF.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine3NF.style.borderRadius = '0px 50px 0px 0px';

        const infoCardContainer = document.querySelector('.translateable1');
        infoCardContainer.classList.add('info-card-items-container');
        infoCardContainer.classList.remove('info-card-items-container-arabic');

        const infoCardText = document.querySelector('.translateable2');
        infoCardText.classList.add('info-text');
        infoCardText.classList.remove('info-text-arabic');

        const infoRole = document.querySelector('.translateable3');
        infoRole.innerHTML = 'Event Photographer';
        infoRole.classList.add('role');
        infoRole.classList.remove('role-arabic');

        const infoName = document.querySelector('.translateable4');
        infoName.innerHTML = 'Khalid Al-Gethami';
        infoName.classList.add('info-name');
        infoName.classList.remove('info-name-arabic');

        const detailPhrase1 = document.querySelector('.detail1');
        detailPhrase1.innerHTML = 'All Events 📸';

        const detailPhrase2 = document.querySelector('.detail2');
        detailPhrase2.innerHTML = 'Al-Tayef & Mekkah📍';

        const thumbnail = document.querySelector('.thumbnail-arabic');
        thumbnail.classList.remove('thumbnail-arabic');
        thumbnail.classList.add('thumbnail');

        const thumbnailTextArabic = document.querySelector('.thumbnail-text-container-arabic');
        thumbnailTextArabic.classList.add('thumbnail-text');
        thumbnailTextArabic.classList.remove('thumbnail-text-container-arabic');
        
        const switchHookEN = document.querySelector('.switch-hook1-arabic');
        switchHookEN.classList.add('switch-hook1');
        switchHookEN.classList.remove('switch-hook1-arabic');
        switchHookEN.innerHTML = "Do You Need A Wedding Shoot?";

        const switchHookDescriptionEN = document.querySelector('.switch-hook-description-arabic');
        switchHookDescriptionEN.classList.add('switch-hook-description');
        switchHookDescriptionEN.classList.remove('switch-hook-description-arabic');
        switchHookDescriptionEN.innerHTML = "Book a quick call to discuss time, location, and important details. Empty spots fill up Book Now!"

        const ctaContent = document.querySelector('.cta-content-arabic');
        ctaContent.classList.remove('cta-content-arabic');
        ctaContent.classList.add('cta-content');
        ctaContent.innerHTML = "<p>Book Now</p> <img class='polygon' src='ImagesFolder/Polygon4.png'> ";

        const servicesIntroduction = document.querySelector('.services-introduction-arabic');
        servicesIntroduction.classList.remove('services-introduction-arabic');
        servicesIntroduction.classList.add('services-introduction');

        const servicesIntroductionTitle = document.querySelector('.services-introduction-title-arabic');
        servicesIntroductionTitle.classList.remove('services-introduction-title-arabic');
        servicesIntroductionTitle.classList.add('services-introduction-title');
        servicesIntroductionTitle.innerHTML = 'Services I Offer';

        const servicesIntroductionDescription = document.querySelector('.services-introduction-description-arabic');
        servicesIntroductionDescription.classList.remove('services-introduction-description-arabic');
        servicesIntroductionDescription.classList.add('services-introduction-description');
        servicesIntroductionDescription.innerHTML = 'Tailored photographic solutions designed to meet your unique needs and bring your vision to reality.';


        const card1HolderItemsContainer = document.querySelector('.canvas-card1-holder-items-container-arabic');
        card1HolderItemsContainer.classList.remove('canvas-card1-holder-items-container-arabic');
        card1HolderItemsContainer.classList.add('canvas-card1-holder-items-container');

        const card2HolderItemsContainer = document.querySelector('.canvas-card2-holder-items-container-arabic');
        card2HolderItemsContainer.classList.remove('canvas-card2-holder-items-container-arabic');
        card2HolderItemsContainer.classList.add('canvas-card2-holder-items-container');        

        const card3HolderItemsContainer = document.querySelector('.canvas-card3-holder-items-container-arabic');
        card3HolderItemsContainer.classList.remove('canvas-card3-holder-items-container-arabic');
        card3HolderItemsContainer.classList.add('canvas-card3-holder-items-container');               

        const serviceCard1Canvas = document.querySelector('.service-card1-canvas-arabic');
        serviceCard1Canvas.classList.remove('service-card1-canvas-arabic')
        serviceCard1Canvas.classList.add('service-card1-canvas');

        const serviceCard2Canvas = document.querySelector('.service-card2-canvas-arabic');
        serviceCard2Canvas.classList.remove('service-card2-canvas-arabic')
        serviceCard2Canvas.classList.add('service-card2-canvas');

        const serviceCard3Canvas = document.querySelector('.service-card3-canvas-arabic');
        serviceCard3Canvas.classList.remove('service-card3-canvas-arabic');
        serviceCard3Canvas.classList.add('service-card3-canvas');

        const serviceCard1CanvasExtension = document.querySelector('.service-card1-canvas-extension-arabic');
        serviceCard1CanvasExtension.classList.remove('service-card1-canvas-extension-arabic');
        serviceCard1CanvasExtension.classList.add('service-card1-canvas-extension');
        serviceCard1CanvasExtension.innerHTML = "<div class='cta-service-content'><p>Get Service</p> <img  src='ImagesFolder/Polygon4.png' class='service-polygon'> </div>"
        
        const serviceCard1Text = document.querySelector('.service-card1-text-arabic');
        serviceCard1Text.classList.remove('service-card1-text-arabic');
        serviceCard1Text.classList.add('service-card1-text');
        

        const serviceCard1Title = document.querySelector('.service-card1-title-arabic');
        serviceCard1Title.classList.remove('service-card1-title-arabic');
        serviceCard1Title.classList.add('service-card1-title');
        serviceCard1Title.innerHTML = '<img src="ImagesFolder/studio-shoot-icon.png" class="studio-shoot-icon"> Studio Shoot';

        const serviceCard1Description = document.querySelector('.service-card1-description-arabic');
        serviceCard1Description.classList.remove('service-card1-description-arabic');
        serviceCard1Description.classList.add('service-card1-description');
        serviceCard1Description.innerHTML = 'Capture Your Ideal Look.';

        const serviceCard2CanvasExtension = document.querySelector('.service-card2-canvas-extension-arabic');
        serviceCard2CanvasExtension.classList.remove('service-card2-canvas-extension-arabic');
        serviceCard2CanvasExtension.classList.add('service-card2-canvas-extension');
        serviceCard2CanvasExtension.innerHTML = "<div class='cta-service-content'><p>Get Service</p> <img  src='ImagesFolder/Polygon4.png' class='service-polygon'> </div>"

        const serviceCard2Text = document.querySelector('.service-card2-text-arabic');
        serviceCard2Text.classList.remove('service-card2-text-arabic');
        serviceCard2Text.classList.add('service-card2-text');

        const serviceCard2Title = document.querySelector('.service-card2-title-arabic');
        serviceCard2Title.classList.remove('service-card2-title-arabic');
        serviceCard2Title.classList.add('service-card2-title');
        serviceCard2Title.innerHTML = '<img src="ImagesFolder/product-shoot-icon.png" class="product-shoot-icon"> Product Shoot';

        const serviceCard2Description = document.querySelector('.service-card2-description-arabic');
        serviceCard2Description.classList.remove('service-card2-description-arabic');
        serviceCard2Description.classList.add('service-card2-description');
        serviceCard2Description.innerHTML = 'Light Is On Your Products.';


        const serviceCard3CanvasExtension = document.querySelector('.service-card3-canvas-extension-arabic');
        serviceCard3CanvasExtension.classList.remove('service-card3-canvas-extension-arabic');
        serviceCard3CanvasExtension.classList.add('service-card3-canvas-extension');
        serviceCard3CanvasExtension.innerHTML = "<div class='cta-service-content'><p>Get Service</p> <img  src='ImagesFolder/Polygon4.png' class='service-polygon'> </div>"
        
        const serviceCard3Text = document.querySelector('.service-card3-text-arabic');
        serviceCard3Text.classList.remove('service-card3-text-arabic');
        serviceCard3Text.classList.add('service-card3-text');
        
        const serviceCard3Title = document.querySelector('.service-card3-title-arabic');
        serviceCard3Title.classList.remove('service-card3-title-arabic');
        serviceCard3Title.classList.add('service-card3-title');
        serviceCard3Title.innerHTML = '<img src="ImagesFolder/event-coverage-icon.png" class="event-coverage-icon"> Event Coverage';

        const serviceCard3Description = document.querySelector('.service-card3-description-arabic');
        serviceCard3Description.classList.remove('service-card3-description-arabic');
        serviceCard3Description.classList.add('service-card3-description');
        serviceCard3Description.innerHTML = 'Immortalize Highlights.';     
        
        const canvasItemsContainer = document.querySelector('.canvas-items-container-arabic');
        canvasItemsContainer.classList.remove('canvas-items-container-arabic');
        canvasItemsContainer.classList.add('canvas-items-container');
        canvasItemsContainer.innerHTML = "<div class='epp-checkmark'  onclick=' eppPopUp () '><img src='ImagesFolder/epp-checkmark-icon.png' class='epp-checkmark-icon'>EPP Checkmark</div><div class='category'><img src='ImagesFolder/jewelry-icon.png' class='jewelry-icon'>Jewelry</div>"
        
        const ePPTitle = document.querySelector('.epp-title-arabic');
        ePPTitle.classList.add('epp-title');
        ePPTitle.classList.remove('epp-title-arabic');
        ePPTitle.innerHTML = 'Ethical Product Photography';

        const ePPPoint1 = document.querySelector('.epp-point1-arabic');
        ePPPoint1.classList.add('epp-point1');
        ePPPoint1.classList.remove('epp-point1-arabic');   
        ePPPoint1.innerHTML = "<div class='epp-point1-text-arabic'><div class = 'epp-point1-arabic-l1'> الغرض من تصوير المنتج <strong style = 'margin-left: clamp(0px , 1.4vw , 7.126px);'> الصدق هو أولوية: ليس</strong> </div> <div class = 'epp-point1-arabic-l2'> <strong> جعله يبدو أفضل من صورته الحقيقية مما قد </strong> </div> <div class = 'epp-point1-arabic-l3'>يخدع عملائه المحتملين, بل إظهاره بطريقة يكون فيها  </div> <div class = 'epp-point1-arabic-l4'>  .معروض بوضوح و بطريقة تمثل العلامة التجارية</div> </div> <div class='bulletpoint1'></div>";

        const ePPPoint2 = document.querySelector('.epp-point2-arabic');
        ePPPoint2.classList.add('epp-point2');
        ePPPoint2.classList.remove('epp-point2-arabic');   
        ePPPoint2.innerHTML = "<div class='bulletpoint1'></div> <p class='epp-point1-text'> <strong>Honesty is a priority:</strong> The purpose of product photography is <strong> not to make the product look better than it’s real picture</strong> which could deceive it’s potential buyers and that is against the ethics of this service, but rather capture your product in a manner where it is displayed clearly, and in a way that represents your brand’s style.</p>";

        const ePPPopUpDone = document.querySelector('.pop-up-done-arabic');
        ePPPopUpDone.classList.add('pop-up-done');
        ePPPopUpDone.classList.remove('pop-up-done-arabic');        
        ePPPopUpDone.innerHTML = 'I Understand';

        const counterSectionTitle = document.querySelector('.experience-introduction-title-arabic');
        counterSectionTitle.classList.add('experience-introduction-title');
        counterSectionTitle.classList.remove('experience-introduction-title-arabic');
        counterSectionTitle.innerHTML = 'Experience';

        const counterSectionDescription = document.querySelector('.experience-introduction-description-arabic');
        counterSectionDescription.classList.add('experience-introduction-description')
        counterSectionDescription.classList.remove('experience-introduction-description-arabic')
        counterSectionDescription.innerHTML = 'This Section highlights my journey as a photographer';

        const counterCard1Number = document.querySelector('.counter-card1-number-arabic');
        counterCard1Number.classList.add('counter-card1-number');
        counterCard1Number.classList.remove('counter-card1-number-arabic');
        counterCard1Number.innerHTML = '+10';
        
        const counterCard1Title = document.querySelector('.counter-card1-title-arabic');
        counterCard1Title.classList.add('counter-card1-title');
        counterCard1Title.classList.remove('counter-card1-title-arabic');
        counterCard1Title.innerHTML = 'Years';

        const counterCard1Description = document.querySelector('.counter-card1-description-arabic');
        counterCard1Description.classList.add('counter-card1-description');
        counterCard1Description.classList.remove('counter-card1-description-arabic');
        counterCard1Description.innerHTML = "Over 10 years of being active in many categories of photography.";
        
        const counterCard2Number = document.querySelector('.counter-card2-number-arabic');
        counterCard2Number.classList.remove('counter-card2-number-arabic');
        counterCard2Number.classList.add('counter-card2-number');
        counterCard2Number.innerHTML = '+113';
        
        const counterCard2Title = document.querySelector('.counter-card2-title-arabic');
        counterCard2Title.classList.add('counter-card2-title');
        counterCard2Title.classList.remove('counter-card2-title-arabic');
        counterCard2Title.innerHTML = 'Clients';

        const counterCard2Description = document.querySelector('.counter-card2-description-arabic');
        counterCard2Description.classList.add('counter-card2-description');
        counterCard2Description.classList.remove('counter-card2-description-arabic');
        counterCard2Description.innerHTML = "Gained Over 113 photography clients, many of them re-occuring.";  
        
        const counterCard3Number = document.querySelector('.counter-card3-number-arabic');
        counterCard3Number.classList.add('counter-card3-number');
        counterCard3Number.classList.remove('counter-card3-number-arabic');
        counterCard3Number.innerHTML = '+23K';
        
        const counterCard3Title = document.querySelector('.counter-card3-title-arabic');
        counterCard3Title.classList.add('counter-card3-title');
        counterCard3Title.classList.remove('counter-card3-title-arabic');
        counterCard3Title.innerHTML = 'Captured';

        const counterCard3Description = document.querySelector('.counter-card3-description-arabic');
        counterCard3Description.classList.add('counter-card3-description');
        counterCard3Description.classList.remove('counter-card3-description-arabic');
        counterCard3Description.innerHTML = "Captured Over 23,000 Photographic Moments over the years.";   
        
        const bannerSectionTitle = document.querySelector('.banner-introduction-title-arabic');
        bannerSectionTitle.classList.remove('banner-introduction-title-arabic');
        bannerSectionTitle.classList.add('banner-introduction-title');
        bannerSectionTitle.innerHTML = 'Event';

        const bannerSectionDescriptionA = document.querySelector('.banner-introduction-description-arabic');
        bannerSectionDescriptionA.classList.remove('banner-introduction-description-arabic');
        bannerSectionDescriptionA.classList.add('banner-introduction-description');
        bannerSectionDescriptionA.innerHTML = 'Some of the events I have covered as a photographer';

        const bannerSectionCommentA = document.querySelector('.banner-comment-arabic');
        bannerSectionCommentA.classList.remove('banner-comment-arabic');
        bannerSectionCommentA.classList.add('banner-comment');
        bannerSectionCommentA.innerHTML = 'And many more.';
        
        const galleryIntroductionTitle = document.querySelector('.gallery-introduction-title-arabic');
        galleryIntroductionTitle.classList.remove('gallery-introduction-title-arabic');        
        galleryIntroductionTitle.classList.add('gallery-introduction-title');
        galleryIntroductionTitle.innerHTML = 'More Pics Less Words';

        const galleryIntroductionDescription = document.querySelector('.gallery-introduction-description-arabic');
        galleryIntroductionDescription.classList.remove('gallery-introduction-description-arabic');        
        galleryIntroductionDescription.classList.add('gallery-introduction-description');
        galleryIntroductionDescription.innerHTML = 'Feel free to view and scroll this gallery of work all captured by me.';

        const galleryHeaderContainer = document.querySelector('.gallery-categories-container-arabic');
        galleryHeaderContainer.classList.remove('gallery-categories-container-arabic');
        galleryHeaderContainer.classList.add('gallery-categories-container');

        const galleryHeaderItem1 = document.querySelector('.gallery-category1');
        galleryHeaderItem1.innerHTML = 'Weddings';

        const galleryHeaderItem2 = document.querySelector('.gallery-category2');
        galleryHeaderItem2.innerHTML = 'Products';

        const galleryHeaderItem3 = document.querySelector('.gallery-category3');
        galleryHeaderItem3.innerHTML = 'People';

        const galleryHeaderItem4 = document.querySelector('.gallery-category4');
        galleryHeaderItem4.innerHTML = 'Places';

        const galleryHeaderItem5 = document.querySelector('.gallery-category5');
        galleryHeaderItem5.innerHTML = 'Events';

        const galleryLandscapeTitle = document.querySelector('.landscape-title');
        galleryLandscapeTitle.innerHTML = 'Landscape';

        const galleryPortraitTitle = document.querySelector('.portrait-title');
        galleryPortraitTitle.innerHTML = 'Portrait';

        const galleryFooterDescription = document.querySelector('.gallery-footer-text');
        galleryFooterDescription.innerHTML = "All images from the gallery are copyrighted property of <strong>Khaled Al-Gethami.</strong> For inquiries contact Email: Khaledalgethami@gmail.";
        

        let categoryWidth = window.getComputedStyle(galleryHeaderItem1).width;
        console.log(categoryWidth)

        const toggleUnderline = document.querySelector('.toggle-underline');
        toggleUnderline.style.width = categoryWidth;


        rect = galleryHeaderItem1.getBoundingClientRect();
        const xCoordinate = rect.x;
        const style = window.getComputedStyle(galleryHeaderItem1);
        const width = style.width;
        const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;
        toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;

        document.querySelector('.gallery-category-active').classList.remove('gallery-category-active');
        galleryHeaderItem1.classList.add('gallery-category-active');

        galleryRestart();

        const footerTitleA = document.querySelector('.footer-title');
        footerTitleA.innerHTML =  'How To Book?' ;
        footerTitleA.classList.remove('arabic-text');
        footerTitleA.classList.add('english-text');

        const footerSubTitleA = document.querySelector('.footer-subtitle');
        footerSubTitleA.innerHTML = 'My Booking Process:'
        footerSubTitleA.classList.remove('arabic-text');

        const footerSubTitleDescriptionA = document.querySelector('.footer-subtitle-description');
        footerSubTitleDescriptionA.innerHTML = 'Confirm Booking In Just 3 Steps!';
        footerSubTitleDescriptionA.classList.remove('arabic-text');

        const footerSectionContainerA = document.querySelector('.footer-visual-explanation');
        footerSectionContainerA.classList.remove('arabic-text');

        const stepNumber1A = document.querySelector('.step1-number');
        stepNumber1A.innerHTML = '1.';
        stepNumber1A.classList.remove('arabic-text');

        const step1ImageA = document.querySelector('.step1-image');
        step1ImageA.src = 'ImagesFolder/step1-image.png';
        step1ImageA.classList.remove('arabic-text');        

        const step1TitleA = document.querySelector('.step1-title')
        step1TitleA.innerHTML = 'Click Book Now';
        step1TitleA.classList.remove('arabic-text');

        const step1DescriptionA = document.querySelector('.step1-description');
        step1DescriptionA.innerHTML = 'Click on the Book Now button below.';
        step1DescriptionA.classList.remove('arabic-text');

        const stepNumber2A = document.querySelector('.step2-number');
        stepNumber2A.innerHTML = '2.';
        stepNumber2A.classList.remove('arabic-text');
        
        const step2TitleA = document.querySelector('.step2-title')
        step2TitleA.innerHTML = 'Fill in the info & submit';
        step2TitleA.classList.remove('arabic-text');

        const step2DescriptionA = document.querySelector('.step2-description');
        step2DescriptionA.innerHTML = 'In next page, fill the details & click the yellow button.';
        step2DescriptionA.classList.remove('arabic-text')

        const stepNumber3A = document.querySelector('.step3-number');
        stepNumber3A.innerHTML = '3.';
        stepNumber3A.classList.remove('arabic-text');
        
        const step3TitleA = document.querySelector('.step3-title')
        step3TitleA.innerHTML = 'Press Send';
        step3TitleA.classList.remove('arabic-text');

        const step3DescriptionA = document.querySelector('.step3-description');
        step3DescriptionA.innerHTML = 'You will be directed to WhatsApp, just press send.';
        step3DescriptionA.classList.remove('arabic-text');

        const footerDescriptionA = document.querySelector('.footer-visual-explanation-description');
        footerDescriptionA.innerHTML = "This button below will start you on the first step, don't hesitate book now!";
        footerDescriptionA.classList.remove('arabic-text');

        const footerCTAContent = document.querySelector('.cta-content-arabic');
        footerCTAContent.innerHTML = "<p>Book Now</p> <img class='polygon' src='ImagesFolder/Polygon4.png' loading='lazy'>";
        footerCTAContent.classList.add('cta-content');
        footerCTAContent.classList.remove('cta-content-arabic');


        language = 'English';
        console.log('Switched Language to English');

        localStorage.setItem('previousLanguage', JSON.stringify(language));



        console.log('English is the current language');

    }};


currentLanguage();



































function switchLanguage(){

    const langButton = document.querySelector('.language');

    console.log(langButton.innerHTML)

    if (langButton.innerHTML == 'ع') {

        document.body.style.cssText = "background-color: #0D0D0D;  display: flex;flex-direction: column; align-items: center; margin-left: 0px; margin-right: 0px; margin-top: 0px; font-family: 'Noto Sans Arabic'; color: white; overflow-x: hidden;";

        console.log('English is current, now switching to Arabic');

        const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed')  ;
        headerItemsContainer.style.flexDirection = 'row-reverse';

        const headerLeftBox = document.querySelector(".header-left-box");
        headerLeftBox.style.flexDirection =  'row-reverse';

        const portfolioName = document.querySelector('.name');
        portfolioName.innerHTML = 'خالد';

        portfolioName.style.marginLeft = '0px';
        portfolioName.style.marginRight = 'clamp(0px,1.86vw,20px)';

        const headerRightBox = document.querySelector(".header-right-box");
        headerRightBox.style.flexDirection =  'row-reverse';

        const langButton = document.querySelector('.language');
        langButton.innerHTML = 'EN';

        hamburgerLine1.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine2.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine3.style.borderRadius = '50px 0px 0px 0px';

        hamburgerLine1NF.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine2NF.style.borderRadius = '50px 0px 0px 0px';
        hamburgerLine3NF.style.borderRadius = '50px 0px 0px 0px';

        const infoCardContainer = document.querySelector('.translateable1');
        infoCardContainer.classList.add('info-card-items-container-arabic');
        infoCardContainer.classList.remove('info-card-items-container');

        const infoCardText = document.querySelector('.translateable2');
        infoCardText.classList.add('info-text-arabic');
        infoCardText.classList.remove('info-text');

        const infoRole = document.querySelector('.translateable3');
        infoRole.innerHTML = 'مصور مناسبات';
        infoRole.classList.add('role-arabic');
        infoRole.classList.remove('role');
        
        const infoName = document.querySelector('.translateable4');
        infoName.innerHTML = 'خالد القثامي';
        infoName.classList.add('info-name-arabic');
        infoName.classList.remove('info-name');

        const detailPhrase1 = document.querySelector('.detail1');
        detailPhrase1.innerHTML = '📸جميع المناسبات';

        const detailPhrase2 = document.querySelector('.detail2');
        detailPhrase2.innerHTML = '📍الطائف و مكة المكرمة';

        const thumbnail = document.querySelector('.thumbnail');
        thumbnail.classList.add('thumbnail-arabic');
        thumbnail.classList.remove('thumbnail');

        const thumbnailTextArabic = document.querySelector('.thumbnail-text');
        thumbnailTextArabic.classList.add('thumbnail-text-container-arabic');
        thumbnailTextArabic.classList.remove('thumbnail-text');
        
        const switchHook1A = document.querySelector('.switch-hook1');
        switchHook1A.classList.add('switch-hook1-arabic');
        switchHook1A.classList.remove('switch-hook1');;
        switchHook1A.innerHTML = "<span class = 'sha1'>تحتاج تغطية</span> <span class = 'sha2'>فوتوغرافية لعرسك؟</span>";
    
        const switchHookDescriptionA = document.querySelector('.switch-hook-description');
        switchHookDescriptionA.classList.add('switch-hook-description-arabic');
        switchHookDescriptionA.classList.remove('switch-hook-description');
        switchHookDescriptionA.innerHTML = "<span class= 'ashd1'>إحجز مكالمة سريعة لمناقشة</span> <span class= 'ashd2'> الوقت و المكان وأهم</span><span class= 'ashd3'> .التفاصيل لتغطية فرحك</span> <span class= 'ashd4'>سابق بحجز تاريخك </span> <span class= 'ashd4'>!المناسب</span>";

        const ctaContent = document.querySelector('.cta-content');
        ctaContent.classList.remove('cta-content');
        ctaContent.classList.add('cta-content-arabic');
        ctaContent.innerHTML = '<div class="cta-content-arabic"><p>إحجز الآن</p> <img class="Polygon" src="ImagesFolder/Polygon-arabic.svg" alt=""> </div>';

        const servicesIntroductionA = document.querySelector('.services-introduction');
        servicesIntroductionA.classList.remove('services-introduction');
        servicesIntroductionA.classList.add('services-introduction-arabic');

        const servicesIntroductionTitleA = document.querySelector('.services-introduction-title');
        servicesIntroductionTitleA.classList.remove('services-introduction-title');
        servicesIntroductionTitleA.classList.add('services-introduction-title-arabic');
        servicesIntroductionTitleA.innerHTML = 'خدمات أوفرها لك';

        const servicesIntroductionDescriptionA = document.querySelector('.services-introduction-description');
        servicesIntroductionDescriptionA.classList.remove('services-introduction-description');
        servicesIntroductionDescriptionA.classList.add('services-introduction-description-arabic');
        servicesIntroductionDescriptionA.innerHTML = '.حلول تصويرية مصممة لتلبي إحتياجاتك الفريدة و تنفيذ مهامك';

        const card1HolderItemsContainerA = document.querySelector('.canvas-card1-holder-items-container');
        card1HolderItemsContainerA.classList.remove('canvas-card1-holder-items-container');
        card1HolderItemsContainerA.classList.add('canvas-card1-holder-items-container-arabic');

        const card2HolderItemsContainerA = document.querySelector('.canvas-card2-holder-items-container');
        card2HolderItemsContainerA.classList.remove('canvas-card2-holder-items-container');
        card2HolderItemsContainerA.classList.add('canvas-card2-holder-items-container-arabic');        

        const card3HolderItemsContainerA = document.querySelector('.canvas-card3-holder-items-container');
        card3HolderItemsContainerA.classList.remove('canvas-card3-holder-items-container');
        card3HolderItemsContainerA.classList.add('canvas-card3-holder-items-container-arabic');               

        const serviceCard1CanvasA = document.querySelector('.service-card1-canvas');
        serviceCard1CanvasA.classList.remove('service-card1-canvas')
        serviceCard1CanvasA.classList.add('service-card1-canvas-arabic');

        const serviceCard2CanvasA = document.querySelector('.service-card2-canvas');
        serviceCard2CanvasA.classList.remove('service-card2-canvas')
        serviceCard2CanvasA.classList.add('service-card2-canvas-arabic');

        const serviceCard3CanvasA = document.querySelector('.service-card3-canvas');
        serviceCard3CanvasA.classList.remove('service-card3-canvas')
        serviceCard3CanvasA.classList.add('service-card3-canvas-arabic');

        const serviceCard1CanvasExtensionA = document.querySelector('.service-card1-canvas-extension');
        serviceCard1CanvasExtensionA.classList.remove('service-card1-canvas-extension');
        serviceCard1CanvasExtensionA.classList.add('service-card1-canvas-extension-arabic');
        serviceCard1CanvasExtensionA.innerHTML = ' <div class="cta-service-content-arabic"> <img  src="ImagesFolder/Polygon-arabic.svg" class="service-polygon"> <p>إحجز الخدمة</p></div>';
        
        const serviceCard1TextA = document.querySelector('.service-card1-text');
        serviceCard1TextA.classList.remove('service-card1-text');
        serviceCard1TextA.classList.add('service-card1-text-arabic');
        

        const serviceCard1Title = document.querySelector('.service-card1-title');
        serviceCard1Title.classList.remove('service-card1-title');
        serviceCard1Title.classList.add('service-card1-title-arabic');
        serviceCard1Title.innerHTML = "تصوير إستديو <img src='ImagesFolder/studio-shoot-icon-arabic.png' class='studio-shoot-icon-arabic'>";

        const serviceCard1Description = document.querySelector('.service-card1-description');
        serviceCard1Description.classList.remove('service-card1-description');
        serviceCard1Description.classList.add('service-card1-description-arabic');
        serviceCard1Description.innerHTML = "إلتقط المظهر المناسب لك";


        const serviceCard2CanvasExtensionA = document.querySelector('.service-card2-canvas-extension');
        serviceCard2CanvasExtensionA.classList.remove('service-card2-canvas-extension');
        serviceCard2CanvasExtensionA.classList.add('service-card2-canvas-extension-arabic');
        serviceCard2CanvasExtensionA.innerHTML = ' <div class="cta-service-content-arabic"> <img  src="ImagesFolder/Polygon-arabic.svg" class="service-polygon"> <p>إحجز الخدمة</p></div>';
        
        const serviceCard2TextA = document.querySelector('.service-card2-text');
        serviceCard2TextA.classList.remove('service-card2-text');
        serviceCard2TextA.classList.add('service-card2-text-arabic');
        

        const serviceCard2Title = document.querySelector('.service-card2-title');
        serviceCard2Title.classList.remove('service-card2-title');
        serviceCard2Title.classList.add('service-card2-title-arabic');
        serviceCard2Title.innerHTML = " تصوير المنتجات <img src='ImagesFolder/studio-shoot-icon-arabic.png' class='studio-shoot-icon-arabic'>";

        const serviceCard2Description = document.querySelector('.service-card2-description');
        serviceCard2Description.classList.remove('service-card2-description');
        serviceCard2Description.classList.add('service-card2-description-arabic');
        serviceCard2Description.innerHTML = "سلط الضوء على منتجاتك";


        const serviceCard3CanvasExtensionA = document.querySelector('.service-card3-canvas-extension');
        serviceCard3CanvasExtensionA.classList.remove('service-card3-canvas-extension');
        serviceCard3CanvasExtensionA.classList.add('service-card3-canvas-extension-arabic');
        serviceCard3CanvasExtensionA.innerHTML = ' <div class="cta-service-content-arabic"> <img  src="ImagesFolder/Polygon-arabic.svg" class="service-polygon"> <p>إحجز الخدمة</p></div>';
        
        const serviceCard3TextA = document.querySelector('.service-card3-text');
        serviceCard3TextA.classList.remove('service-card3-text');
        serviceCard3TextA.classList.add('service-card3-text-arabic');
        

        const serviceCard3Title = document.querySelector('.service-card3-title');
        serviceCard3Title.classList.remove('service-card3-title');
        serviceCard3Title.classList.add('service-card3-title-arabic');
        serviceCard3Title.innerHTML = "تغطية المهرجانات  <img src='ImagesFolder/studio-shoot-icon-arabic.png' class='studio-shoot-icon-arabic'>";

        const serviceCard3Description = document.querySelector('.service-card3-description');
        serviceCard3Description.classList.remove('service-card3-description');
        serviceCard3Description.classList.add('service-card3-description-arabic');
        serviceCard3Description.innerHTML = "خلد الأحداث";

        const canvasItemsContainerA = document.querySelector('.canvas-items-container');
        canvasItemsContainerA.classList.remove('canvas-items-container');
        canvasItemsContainerA.classList.add('canvas-items-container-arabic');
        canvasItemsContainerA.innerHTML = "<div class='category-arabic'>المجوهرات <img src='ImagesFolder/jewelry-icon.png' class='jewelry-icon'></div> <div class='epp-checkmark-arabic'  onclick='eppPopUp () '>أخلاقيات تصوير المنتج <img src='ImagesFolder/epp-checkmark-icon.png' class='epp-checkmark-icon'></div>";

        const ePPTitleA = document.querySelector('.epp-title');
        ePPTitleA.classList.remove('epp-title');
        ePPTitleA.classList.add('epp-title-arabic');
        ePPTitleA.innerHTML = 'أخلاقيات تصوير المنتج';

        const ePPPoint1A = document.querySelector('.epp-point1');
        ePPPoint1A.classList.remove('epp-point1');
        ePPPoint1A.classList.add('epp-point1-arabic');   
        ePPPoint1A.innerHTML = "<div class='epp-point1-text-arabic'><div class = 'epp-point1-arabic-l1'> الغرض من تصوير المنتج <strong style = 'margin-left: clamp(0px , 1.4vw , 7.126px);'> الصدق هو أولوية: ليس</strong> </div> <div class = 'epp-point1-arabic-l2'> <strong> جعله يبدو أفضل من صورته الحقيقية مما قد </strong> </div> <div class = 'epp-point1-arabic-l3'>يخدع عملائه المحتملين, بل إظهاره بطريقة يكون فيها  </div> <div class = 'epp-point1-arabic-l4'>  .معروض بوضوح و بطريقة تمثل العلامة التجارية</div> </div> <div class='bulletpoint1'></div>";

        const ePPPoint2A = document.querySelector('.epp-point2');
        ePPPoint2A.classList.remove('epp-point2');
        ePPPoint2A.classList.add('epp-point2-arabic');   
        ePPPoint2A.innerHTML = "<div class='epp-point2-text-arabic'> <div class = 'epp-point2-arabic-l1'> لن تعزز اللمسات التعديلية أثناء التصوير   <strong style = 'margin-left: clamp(0px , 1.4vw , 7.126px);'>  :التعديل   </strong> </div> <div class = 'epp-point2-arabic-l2'> أو بعده نقاط قوة المنتج أو تخفي نقاط ضعفه, ولكن</div> <div class = 'epp-point2-arabic-l3'>تستهدف المنطقة أو الأشياء المحيطة بالمنتج (مثل </div> <div class = 'epp-point2-arabic-l4'>الإضاءة ولون الخلفية أو ملمسها وما إلى ذلك) لتحقيق </div> <div class = 'epp-point2-arabic-l5'>الهدف الرئيسي المتمثل في عرض منتجك بوضوح و</div> <div class = 'epp-point2-arabic-l6'> .بطريقة تمثل أسلوب العلامة التجارية</div> </div> <div class='bulletpoint2'></div>";

        const ePPPopUpDoneA = document.querySelector('.pop-up-done');
        ePPPopUpDoneA.classList.remove('pop-up-done');
        ePPPopUpDoneA.classList.add('pop-up-done-arabic');        
        ePPPopUpDoneA.innerHTML = 'أتفق معك';

        const counterSectionTitleA = document.querySelector('.experience-introduction-title');
        counterSectionTitleA.classList.remove('experience-introduction-title');
        counterSectionTitleA.classList.add('experience-introduction-title-arabic');
        counterSectionTitleA.innerHTML = 'الخبرة المكتسبة';

        const counterSectionDescriptionA = document.querySelector('.experience-introduction-description');
        counterSectionDescriptionA.classList.remove('experience-introduction-description')
        counterSectionDescriptionA.classList.add('experience-introduction-description-arabic')
        counterSectionDescriptionA.innerHTML = 'تسليط الضوء على رحلتي كمصور';

        const counterCard1NumberA = document.querySelector('.counter-card1-number');
        counterCard1NumberA.classList.remove('counter-card1-number');
        counterCard1NumberA.classList.add('counter-card1-number-arabic');
        counterCard1NumberA.innerHTML = '+١٠';
        
        const counterCard1TitleA = document.querySelector('.counter-card1-title');
        counterCard1TitleA.classList.remove('counter-card1-title');
        counterCard1TitleA.classList.add('counter-card1-title-arabic');
        counterCard1TitleA.innerHTML = 'سنوات';

        const counterCard1DescriptionA = document.querySelector('.counter-card1-description');
        counterCard1DescriptionA.classList.remove('counter-card1-description');
        counterCard1DescriptionA.classList.add('counter-card1-description-arabic');
        counterCard1DescriptionA.innerHTML = "<p class = 'cc1al1'>  أكثر من ١٠ سنوات من النشاط الفوتوغرافي</p>  <p class = 'cc1al2' > .في عدة مجالات </p>";
        
        const counterCard2NumberA = document.querySelector('.counter-card2-number');
        counterCard2NumberA.classList.remove('counter-card2-number');
        counterCard2NumberA.classList.add('counter-card2-number-arabic');
        counterCard2NumberA.innerHTML = '+١١٣';
        
        const counterCard2TitleA = document.querySelector('.counter-card2-title');
        counterCard2TitleA.classList.remove('counter-card2-title');
        counterCard2TitleA.classList.add('counter-card2-title-arabic');
        counterCard2TitleA.innerHTML = 'عملاء تصوير';

        const counterCard2DescriptionA = document.querySelector('.counter-card2-description');
        counterCard2DescriptionA.classList.remove('counter-card2-description');
        counterCard2DescriptionA.classList.add('counter-card2-description-arabic');
        counterCard2DescriptionA.innerHTML = "<p class = 'cc1al1'>إكتسبت أكثر من ١١٣ عميل لخدمات التصوير</p>  <p class = 'cc1al2' > .عبر الوقت و الكثير منهم متكررين</p>";  
        
        const counterCard3NumberA = document.querySelector('.counter-card3-number');
        counterCard3NumberA.classList.remove('counter-card3-number');
        counterCard3NumberA.classList.add('counter-card3-number-arabic');
        counterCard3NumberA.innerHTML = '+٢٣K';
        
        const counterCard3TitleA = document.querySelector('.counter-card3-title');
        counterCard3TitleA.classList.remove('counter-card3-title');
        counterCard3TitleA.classList.add('counter-card3-title-arabic');
        counterCard3TitleA.innerHTML = 'صورة ملتقطة';

        const counterCard3DescriptionA = document.querySelector('.counter-card3-description');
        counterCard3DescriptionA.classList.remove('counter-card3-description');
        counterCard3DescriptionA.classList.add('counter-card3-description-arabic');
        counterCard3DescriptionA.innerHTML = "<p class = 'cc1al1'>إلتقطت أكثر من ٢٣ ألف صورة فوتوغرافية</p>  <p class = 'cc1al2' >.عبر السنوات</p>";      
        
        const bannerSectionTitleA = document.querySelector('.banner-introduction-title');
        bannerSectionTitleA.classList.remove('banner-introduction-title');
        bannerSectionTitleA.classList.add('banner-introduction-title-arabic');
        bannerSectionTitleA.innerHTML = 'مهرجانات';

        const bannerSectionDescriptionA = document.querySelector('.banner-introduction-description');
        bannerSectionDescriptionA.classList.remove('banner-introduction-description');
        bannerSectionDescriptionA.classList.add('banner-introduction-description-arabic');
        bannerSectionDescriptionA.innerHTML = '.بعض تغطياتي الفوتوغرافية للمهرجانات';

        const bannerSectionCommentA = document.querySelector('.banner-comment');
        bannerSectionCommentA.classList.remove('banner-comment');
        bannerSectionCommentA.classList.add('banner-comment-arabic');
        bannerSectionCommentA.innerHTML = '.و غيرها العديد';

        const galleryIntroductionTitleA = document.querySelector('.gallery-introduction-title');
        galleryIntroductionTitleA.classList.remove('gallery-introduction-title');
        galleryIntroductionTitleA.classList.add('gallery-introduction-title-arabic');
        galleryIntroductionTitleA.innerHTML = 'نختصر الكلمات و نترك الصور تتحدث';

        const galleryIntroductionDescriptionA = document.querySelector('.gallery-introduction-description');
        galleryIntroductionDescriptionA.classList.remove('gallery-introduction-description');
        galleryIntroductionDescriptionA.classList.add('gallery-introduction-description-arabic');
        galleryIntroductionDescriptionA.innerHTML = 'لا تتردد في التمرير بمعرض الصور التي إلتقطتها كلها بنفسي ';

        const galleryHeaderContainerA = document.querySelector('.gallery-categories-container');
        galleryHeaderContainerA.classList.remove('gallery-categories-container');
        galleryHeaderContainerA.classList.add('gallery-categories-container-arabic');

        const galleryHeaderItem1A = document.querySelector('.gallery-category1');
        galleryHeaderItem1A.innerHTML = 'أفراح';

        const galleryHeaderItem2A = document.querySelector('.gallery-category2');
        galleryHeaderItem2A.innerHTML = 'منتجات';

        const galleryHeaderItem3A = document.querySelector('.gallery-category3');
        galleryHeaderItem3A.innerHTML = 'أشخاص';

        const galleryHeaderItem4A = document.querySelector('.gallery-category4');
        galleryHeaderItem4A.innerHTML = 'أماكن';

        const galleryHeaderItem5A = document.querySelector('.gallery-category5');
        galleryHeaderItem5A.innerHTML = 'أحداث';

        const galleryLandscapeTitleA = document.querySelector('.landscape-title');
        galleryLandscapeTitleA.innerHTML = 'أفقية';

        const galleryPortraitTitleA = document.querySelector('.portrait-title');
        galleryPortraitTitleA.innerHTML = 'عامودية';

        const galleryFooterDescriptionA = document.querySelector('.gallery-footer-text');
        galleryFooterDescriptionA.innerHTML = "<p class = 'gdl1a' style = 'text-align:right;'> ,جميع صور المعرض محفوظة بحقوق الطبع والنشر لخالد القثامي. للاستفسار</p><p class = 'gdl2a' style = 'text-align:right;'>  <strong>Khaledalgethami@gmail.com</strong> : يحبذ التواصل عبر البريد الإلكتروني</p> ";

        let categoryWidth = window.getComputedStyle(galleryHeaderItem1A).width;
        console.log(categoryWidth)

        const toggleUnderline = document.querySelector('.toggle-underline');
        toggleUnderline.style.width = categoryWidth;

        const footerTitleA = document.querySelector('.footer-title');
        footerTitleA.innerHTML =  'تريد كيفية الحجز؟' ;
        footerTitleA.classList.add('arabic-text');

        const footerSubTitleA = document.querySelector('.footer-subtitle');
        footerSubTitleA.innerHTML = 'إليك سهولة عملية الحجز الخاصة بي:'
        footerSubTitleA.classList.add('arabic-text');

        const footerSubTitleDescriptionA = document.querySelector('.footer-subtitle-description');
        footerSubTitleDescriptionA.innerHTML = 'أكد عملية الحجز ب٣ خطوات فقط!';
        footerSubTitleDescriptionA.classList.add('arabic-text');

        const footerSectionContainerA = document.querySelector('.footer-visual-explanation');
        footerSectionContainerA.classList.add('arabic-text');

        const stepNumber1A = document.querySelector('.step1-number');
        stepNumber1A.innerHTML = '١.';
        stepNumber1A.classList.add('arabic-text');

        const step1ImageA = document.querySelector('.step1-image');
        step1ImageA.src = 'ImagesFolder/step1-image-arabic.png';
        step1ImageA.classList.add('arabic-text');        

        const step1TitleA = document.querySelector('.step1-title')
        step1TitleA.innerHTML = 'إضغط على زر إحجز الآن.';
        step1TitleA.classList.add('arabic-text');

        const step1DescriptionA = document.querySelector('.step1-description');
        step1DescriptionA.innerHTML = 'إضغط على زر إحجز الآن أدناه.';
        step1DescriptionA.classList.add('arabic-text');

        const stepNumber2A = document.querySelector('.step2-number');
        stepNumber2A.innerHTML = '٢.';
        stepNumber2A.classList.add('arabic-text');
        
        const step2TitleA = document.querySelector('.step2-title')
        step2TitleA.innerHTML = 'إملئ الفراغات و قدِم.';
        step2TitleA.classList.add('arabic-text');

        const step2DescriptionA = document.querySelector('.step2-description');
        step2DescriptionA.innerHTML = 'في الصفحة التالية إملئ الفراغات و إضغط الزر الأصفر.';
        step2DescriptionA.classList.add('arabic-text')

        const stepNumber3A = document.querySelector('.step3-number');
        stepNumber3A.innerHTML = '٣.';
        stepNumber3A.classList.add('arabic-text');
        
        const step3TitleA = document.querySelector('.step3-title')
        step3TitleA.innerHTML = 'إضغط زر الإرسال.';
        step3TitleA.classList.add('arabic-text');

        const step3DescriptionA = document.querySelector('.step3-description');
        step3DescriptionA.innerHTML = ' سيتم توجيهك إلى الواتساب كل ما عليك فعله هو الإرسال فقط.';
        step3DescriptionA.classList.add('arabic-text');

        const footerDescriptionA = document.querySelector('.footer-visual-explanation-description');
        footerDescriptionA.innerHTML = 'من خلال هذا الزر ستبدأ بالخطوى الأولى, لا تتردد إحجز الآن!';
        footerDescriptionA.classList.add('arabic-text');

        const footerCTAContentA = document.querySelector('.cta-content');
        footerCTAContentA.innerHTML = '<div class="cta-content-arabic"><p>إحجز الآن</p> <img class="Polygon" src="ImagesFolder/Polygon-arabic.svg" alt=""> </div>';
    

        
        rect = galleryHeaderItem1A.getBoundingClientRect();
        const xCoordinate = rect.x;
        const style = window.getComputedStyle(galleryHeaderItem1A);
        const width = style.width;
        const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;
        toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;   

        const arabicText = document.querySelector('.arabic-text');

        document.querySelector('.gallery-category-active').classList.remove('gallery-category-active');
        galleryHeaderItem1A.classList.add('gallery-category-active');

        galleryRestart();


        language = 'Arabic';
        console.log('Switched Language to Arabic');

        localStorage.setItem('previousLanguage', JSON.stringify(language));

    
    }else if (langButton.innerHTML == 'EN'){

        document.body.style.cssText = "background-color: #0D0D0D; display: flex;flex-direction: column; align-items: center; margin-left: 0px; margin-right: 0px; margin-top: 0px; font-family: Inter; color: white; overflow-x: hidden;";

        const headerItemsContainer = document.querySelector('.header-items-container') || document.querySelector('.header-items-container-fixed') ;
        headerItemsContainer.style.flexDirection = 'row';

        const headerLeftBox = document.querySelector(".header-left-box");
        headerLeftBox.style.flexDirection =  'row';

        const portfolioName = document.querySelector('.name');
        portfolioName.innerHTML = 'Khalid';

        portfolioName.style.marginRight = '0px';
        portfolioName.style.marginLeft = 'clamp(0px,1.86vw,20px)';

        const headerRightBox = document.querySelector(".header-right-box");
        headerRightBox.style.flexDirection =  'row';

        const langButton = document.querySelector('.language');
        langButton.innerHTML = 'ع';

        hamburgerLine1.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine2.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine3.style.borderRadius = '0px 50px 0px 0px';

        hamburgerLine1NF.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine2NF.style.borderRadius = '0px 50px 0px 0px';
        hamburgerLine3NF.style.borderRadius = '0px 50px 0px 0px';

        const infoCardContainer = document.querySelector('.translateable1');
        infoCardContainer.classList.add('info-card-items-container');
        infoCardContainer.classList.remove('info-card-items-container-arabic');

        const infoCardText = document.querySelector('.translateable2');
        infoCardText.classList.add('info-text');
        infoCardText.classList.remove('info-text-arabic');

        const infoRole = document.querySelector('.translateable3');
        infoRole.innerHTML = 'Event Photographer';
        infoRole.classList.add('role');
        infoRole.classList.remove('role-arabic');

        const infoName = document.querySelector('.translateable4');
        infoName.innerHTML = 'Khalid Al-Gethami';
        infoName.classList.add('info-name');
        infoName.classList.remove('info-name-arabic');

        const detailPhrase1 = document.querySelector('.detail1');
        detailPhrase1.innerHTML = 'All Events 📸';

        const detailPhrase2 = document.querySelector('.detail2');
        detailPhrase2.innerHTML = 'Al-Tayef & Mekkah📍';

        const thumbnail = document.querySelector('.thumbnail-arabic');
        thumbnail.classList.remove('thumbnail-arabic');
        thumbnail.classList.add('thumbnail');

        const thumbnailTextArabic = document.querySelector('.thumbnail-text-container-arabic');
        thumbnailTextArabic.classList.add('thumbnail-text');
        thumbnailTextArabic.classList.remove('thumbnail-text-container-arabic');
        
        const switchHookEN = document.querySelector('.switch-hook1-arabic');
        switchHookEN.classList.add('switch-hook1');
        switchHookEN.classList.remove('switch-hook1-arabic');
        switchHookEN.innerHTML = "Do You Need A Wedding Shoot?";

    
        const switchHookDescriptionEN = document.querySelector('.switch-hook-description-arabic');
        switchHookDescriptionEN.classList.add('switch-hook-description');
        switchHookDescriptionEN.classList.remove('switch-hook-description-arabic');
        switchHookDescriptionEN.innerHTML = "Book a quick call to discuss time, location, and important details. Empty spots fill up Book Now!"

        const ctaContent = document.querySelector('.cta-content-arabic');
        ctaContent.classList.remove('cta-content-arabic');
        ctaContent.classList.add('cta-content');
        ctaContent.innerHTML = "<p>Book Now</p> <img class='polygon' src='ImagesFolder/Polygon4.png'> ";

        const servicesIntroduction = document.querySelector('.services-introduction-arabic');
        servicesIntroduction.classList.remove('services-introduction-arabic');
        servicesIntroduction.classList.add('services-introduction');

        const servicesIntroductionTitle = document.querySelector('.services-introduction-title-arabic');
        servicesIntroductionTitle.classList.remove('services-introduction-title-arabic');
        servicesIntroductionTitle.classList.add('services-introduction-title');
        servicesIntroductionTitle.innerHTML = 'Services I Offer';

        const servicesIntroductionDescription = document.querySelector('.services-introduction-description-arabic');
        servicesIntroductionDescription.classList.remove('services-introduction-description-arabic');
        servicesIntroductionDescription.classList.add('services-introduction-description');
        servicesIntroductionDescription.innerHTML = 'Tailored photographic solutions designed to meet your unique needs and bring your vision to reality.';


        const card1HolderItemsContainer = document.querySelector('.canvas-card1-holder-items-container-arabic');
        card1HolderItemsContainer.classList.remove('canvas-card1-holder-items-container-arabic');
        card1HolderItemsContainer.classList.add('canvas-card1-holder-items-container');

        const card2HolderItemsContainer = document.querySelector('.canvas-card2-holder-items-container-arabic');
        card2HolderItemsContainer.classList.remove('canvas-card2-holder-items-container-arabic');
        card2HolderItemsContainer.classList.add('canvas-card2-holder-items-container');        

        const card3HolderItemsContainer = document.querySelector('.canvas-card3-holder-items-container-arabic');
        card3HolderItemsContainer.classList.remove('canvas-card3-holder-items-container-arabic');
        card3HolderItemsContainer.classList.add('canvas-card3-holder-items-container');               

        const serviceCard1Canvas = document.querySelector('.service-card1-canvas-arabic');
        serviceCard1Canvas.classList.remove('service-card1-canvas-arabic')
        serviceCard1Canvas.classList.add('service-card1-canvas');

        const serviceCard2Canvas = document.querySelector('.service-card2-canvas-arabic');
        serviceCard2Canvas.classList.remove('service-card2-canvas-arabic')
        serviceCard2Canvas.classList.add('service-card2-canvas');

        const serviceCard3Canvas = document.querySelector('.service-card3-canvas-arabic');
        serviceCard3Canvas.classList.remove('service-card3-canvas-arabic');
        serviceCard3Canvas.classList.add('service-card3-canvas');

        const serviceCard1CanvasExtension = document.querySelector('.service-card1-canvas-extension-arabic');
        serviceCard1CanvasExtension.classList.remove('service-card1-canvas-extension-arabic');
        serviceCard1CanvasExtension.classList.add('service-card1-canvas-extension');
        serviceCard1CanvasExtension.innerHTML = "<div class='cta-service-content'><p>Get Service</p> <img  src='ImagesFolder/Polygon4.png' class='service-polygon'> </div>"
        
        const serviceCard1Text = document.querySelector('.service-card1-text-arabic');
        serviceCard1Text.classList.remove('service-card1-text-arabic');
        serviceCard1Text.classList.add('service-card1-text');
        

        const serviceCard1Title = document.querySelector('.service-card1-title-arabic');
        serviceCard1Title.classList.remove('service-card1-title-arabic');
        serviceCard1Title.classList.add('service-card1-title');
        serviceCard1Title.innerHTML = '<img src="ImagesFolder/studio-shoot-icon.png" class="studio-shoot-icon"> Studio Shoot';

        const serviceCard1Description = document.querySelector('.service-card1-description-arabic');
        serviceCard1Description.classList.remove('service-card1-description-arabic');
        serviceCard1Description.classList.add('service-card1-description');
        serviceCard1Description.innerHTML = 'Capture Your Ideal Look.';

        const serviceCard2CanvasExtension = document.querySelector('.service-card2-canvas-extension-arabic');
        serviceCard2CanvasExtension.classList.remove('service-card2-canvas-extension-arabic');
        serviceCard2CanvasExtension.classList.add('service-card2-canvas-extension');
        serviceCard2CanvasExtension.innerHTML = "<div class='cta-service-content'><p>Get Service</p> <img  src='ImagesFolder/Polygon4.png' class='service-polygon'> </div>"

        
        const serviceCard2Text = document.querySelector('.service-card2-text-arabic');
        serviceCard2Text.classList.remove('service-card2-text-arabic');
        serviceCard2Text.classList.add('service-card2-text');
        

        const serviceCard2Title = document.querySelector('.service-card2-title-arabic');
        serviceCard2Title.classList.remove('service-card2-title-arabic');
        serviceCard2Title.classList.add('service-card2-title');
        serviceCard2Title.innerHTML = '<img src="ImagesFolder/product-shoot-icon.png" class="product-shoot-icon"> Product Shoot';

        const serviceCard2Description = document.querySelector('.service-card2-description-arabic');
        serviceCard2Description.classList.remove('service-card2-description-arabic');
        serviceCard2Description.classList.add('service-card2-description');
        serviceCard2Description.innerHTML = 'Light Is On Your Products.';


        const serviceCard3CanvasExtension = document.querySelector('.service-card3-canvas-extension-arabic');
        serviceCard3CanvasExtension.classList.remove('service-card3-canvas-extension-arabic');
        serviceCard3CanvasExtension.classList.add('service-card3-canvas-extension');
        serviceCard3CanvasExtension.innerHTML = "<div class='cta-service-content'><p>Get Service</p> <img  src='ImagesFolder/Polygon4.png' class='service-polygon'> </div>"
        
        const serviceCard3Text = document.querySelector('.service-card3-text-arabic');
        serviceCard3Text.classList.remove('service-card3-text-arabic');
        serviceCard3Text.classList.add('service-card3-text');
        
        const serviceCard3Title = document.querySelector('.service-card3-title-arabic');
        serviceCard3Title.classList.remove('service-card3-title-arabic');
        serviceCard3Title.classList.add('service-card3-title');
        serviceCard3Title.innerHTML = "<img src='ImagesFolder/event-coverage-icon.png' class='event-coverage-icon'> Event Coverage";

        const serviceCard3Description = document.querySelector('.service-card3-description-arabic');
        serviceCard3Description.classList.remove('service-card3-description-arabic');
        serviceCard3Description.classList.add('service-card3-description');
        serviceCard3Description.innerHTML = 'Immortalize Highlights.';
        
        const canvasItemsContainer = document.querySelector('.canvas-items-container-arabic');
        canvasItemsContainer.classList.remove('canvas-items-container-arabic');
        canvasItemsContainer.classList.add('canvas-items-container');
        canvasItemsContainer.innerHTML = "<div class='epp-checkmark'  onclick=' eppPopUp () '><img src='ImagesFolder/epp-checkmark-icon.png' class='epp-checkmark-icon'>EPP Checkmark</div><div class='category'><img src='ImagesFolder/jewelry-icon.png' class='jewelry-icon'>Jewelry</div>"
        
        const ePPTitle = document.querySelector('.epp-title-arabic');
        ePPTitle.classList.add('epp-title');
        ePPTitle.classList.remove('epp-title-arabic');
        ePPTitle.innerHTML = 'Ethical Product Photography';

        const ePPPoint1 = document.querySelector('.epp-point1-arabic');
        ePPPoint1.classList.add('epp-point1');
        ePPPoint1.classList.remove('epp-point1-arabic');   
        ePPPoint1.innerHTML = "<div class='bulletpoint1'></div> <p class='epp-point1-text'> <strong>Honesty is a priority:</strong> The purpose of product photography is <strong> not to make the product look better than it’s real picture</strong> which could deceive it’s potential buyers and that is against the ethics of this service, but rather capture your product in a manner where it is displayed clearly, and in a way that represents your brand’s style.</p>";

        const ePPPoint2 = document.querySelector('.epp-point2-arabic');
        ePPPoint2.classList.add('epp-point2');
        ePPPoint2.classList.remove('epp-point2-arabic');   
        ePPPoint2.innerHTML = "<div class='bulletpoint1'></div>  <p class='epp-point2-text'> <strong>Enhancements:</strong> The touchups during or after the product shoot will <strong>not enhance the product’s highlights or hide it’s weak-points</strong>, but are targeted only at the area or objects surrounding the product (lightening, background color, background texture etc) to accomplish the main objective of displaying your product clearly in a way that represents the brand’s style.</p>"

        const ePPPopUpDone = document.querySelector('.pop-up-done-arabic');
        ePPPopUpDone.classList.add('pop-up-done');
        ePPPopUpDone.classList.remove('pop-up-done-arabic');        
        ePPPopUpDone.innerHTML = 'I Understand';

        const counterSectionTitle = document.querySelector('.experience-introduction-title-arabic');
        counterSectionTitle.classList.add('experience-introduction-title');
        counterSectionTitle.classList.remove('experience-introduction-title-arabic');
        counterSectionTitle.innerHTML = 'Experience';

        const counterSectionDescription = document.querySelector('.experience-introduction-description-arabic');
        counterSectionDescription.classList.add('experience-introduction-description')
        counterSectionDescription.classList.remove('experience-introduction-description-arabic')
        counterSectionDescription.innerHTML = 'This Section highlights my journey as a photographer';

        const counterCard1Number = document.querySelector('.counter-card1-number-arabic');
        counterCard1Number.classList.add('counter-card1-number');
        counterCard1Number.classList.remove('counter-card1-number-arabic');
        counterCard1Number.innerHTML = '+10';
        
        const counterCard1Title = document.querySelector('.counter-card1-title-arabic');
        counterCard1Title.classList.add('counter-card1-title');
        counterCard1Title.classList.remove('counter-card1-title-arabic');
        counterCard1Title.innerHTML = 'Years';

        const counterCard1Description = document.querySelector('.counter-card1-description-arabic');
        counterCard1Description.classList.add('counter-card1-description');
        counterCard1Description.classList.remove('counter-card1-description-arabic');
        counterCard1Description.innerHTML = "Over 10 years of being active in many categories of photography.";
        
        const counterCard2Number = document.querySelector('.counter-card2-number-arabic');
        counterCard2Number.classList.remove('counter-card2-number-arabic');
        counterCard2Number.classList.add('counter-card2-number');
        counterCard2Number.innerHTML = '+113';
        
        const counterCard2Title = document.querySelector('.counter-card2-title-arabic');
        counterCard2Title.classList.add('counter-card2-title');
        counterCard2Title.classList.remove('counter-card2-title-arabic');
        counterCard2Title.innerHTML = 'Clients';

        const counterCard2Description = document.querySelector('.counter-card2-description-arabic');
        counterCard2Description.classList.add('counter-card2-description');
        counterCard2Description.classList.remove('counter-card2-description-arabic');
        counterCard2Description.innerHTML = "Gained Over 113 photography clients, many of them re-occuring.";  
        
        const counterCard3Number = document.querySelector('.counter-card3-number-arabic');
        counterCard3Number.classList.add('counter-card3-number');
        counterCard3Number.classList.remove('counter-card3-number-arabic');
        counterCard3Number.innerHTML = '+23K';
        
        const counterCard3Title = document.querySelector('.counter-card3-title-arabic');
        counterCard3Title.classList.add('counter-card3-title');
        counterCard3Title.classList.remove('counter-card3-title-arabic');
        counterCard3Title.innerHTML = 'Captured';

        const counterCard3Description = document.querySelector('.counter-card3-description-arabic');
        counterCard3Description.classList.add('counter-card3-description');
        counterCard3Description.classList.remove('counter-card3-description-arabic');
        counterCard3Description.innerHTML = "Captured Over 23,000 Photographic Moments over the years.";      
        

        const bannerSectionTitle = document.querySelector('.banner-introduction-title-arabic');
        bannerSectionTitle.classList.remove('banner-introduction-title-arabic');
        bannerSectionTitle.classList.add('banner-introduction-title');
        bannerSectionTitle.innerHTML = 'Event';

        const bannerSectionDescriptionA = document.querySelector('.banner-introduction-description-arabic');
        bannerSectionDescriptionA.classList.remove('banner-introduction-description-arabic');
        bannerSectionDescriptionA.classList.add('banner-introduction-description');
        bannerSectionDescriptionA.innerHTML = 'Some of the events I have covered as a photographer';

        const bannerSectionCommentA = document.querySelector('.banner-comment-arabic');
        bannerSectionCommentA.classList.remove('banner-comment-arabic');
        bannerSectionCommentA.classList.add('banner-comment');
        bannerSectionCommentA.innerHTML = 'And many more.';

        const galleryIntroductionTitle = document.querySelector('.gallery-introduction-title-arabic');
        galleryIntroductionTitle.classList.remove('gallery-introduction-title-arabic');        
        galleryIntroductionTitle.classList.add('gallery-introduction-title');
        galleryIntroductionTitle.innerHTML = 'More Pics Less Words';

        const galleryIntroductionDescription = document.querySelector('.gallery-introduction-description-arabic');
        galleryIntroductionDescription.classList.remove('gallery-introduction-description-arabic');        
        galleryIntroductionDescription.classList.add('gallery-introduction-description');
        galleryIntroductionDescription.innerHTML = 'Feel free to view and scroll this gallery of work all captured by me.';

        const galleryHeaderContainer = document.querySelector('.gallery-categories-container-arabic');
        galleryHeaderContainer.classList.remove('gallery-categories-container-arabic');
        galleryHeaderContainer.classList.add('gallery-categories-container');

        const galleryHeaderItem1 = document.querySelector('.gallery-category1');
        galleryHeaderItem1.innerHTML = 'Weddings';

        const galleryHeaderItem2 = document.querySelector('.gallery-category2');
        galleryHeaderItem2.innerHTML = 'Products';

        const galleryHeaderItem3 = document.querySelector('.gallery-category3');
        galleryHeaderItem3.innerHTML = 'People';

        const galleryHeaderItem4 = document.querySelector('.gallery-category4');
        galleryHeaderItem4.innerHTML = 'Places';

        const galleryHeaderItem5 = document.querySelector('.gallery-category5');
        galleryHeaderItem5.innerHTML = 'Events';

        const galleryLandscapeTitle = document.querySelector('.landscape-title');
        galleryLandscapeTitle.innerHTML = 'Landscape';

        const galleryPortraitTitle = document.querySelector('.portrait-title');
        galleryPortraitTitle.innerHTML = 'Portrait';

        const galleryFooterDescription = document.querySelector('.gallery-footer-text');
        galleryFooterDescription.innerHTML = "All images from the gallery are copyrighted property of <strong>Khaled Al-Gethami.</strong> For inquiries contact Email: Khaledalgethami@gmail.";

        let categoryWidth = window.getComputedStyle(galleryHeaderItem1).width;
        console.log(categoryWidth)

        const toggleUnderline = document.querySelector('.toggle-underline');
        toggleUnderline.style.width = categoryWidth;

        rect = galleryHeaderItem1.getBoundingClientRect();
        const xCoordinate = rect.x;
        const style = window.getComputedStyle(galleryHeaderItem1);
        const width = style.width;
        const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;
        toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;        
        
        document.querySelector('.gallery-category-active').classList.remove('gallery-category-active');
        galleryHeaderItem1.classList.add('gallery-category-active');

        galleryRestart();

        const footerTitle = document.querySelector('.footer-title');
        footerTitle.classList.remove('arabic-text');
        footerTitle.innerHTML =  'How To Book?' ;

        const footerSubTitle = document.querySelector('.footer-subtitle');
        footerSubTitle.innerHTML = 'My Booking Process:'
        footerSubTitle.classList.remove('arabic-text');

        const footerSubTitleDescription = document.querySelector('.footer-subtitle-description');
        footerSubTitleDescription.innerHTML = 'Confirm Booking In Just 3 Steps!';
        footerSubTitleDescription.classList.remove('arabic-text');

        const footerSectionContainer = document.querySelector('.footer-visual-explanation');
        footerSectionContainer.classList.remove('arabic-text');

        const stepNumber1 = document.querySelector('.step1-number');
        stepNumber1.innerHTML = '1.';
        stepNumber1.classList.remove('arabic-text');

        const step1Image = document.querySelector('.step1-image');
        step1Image.src = 'ImagesFolder/step1-image.png';
        step1Image.classList.remove('arabic-text');        

        const step1Title = document.querySelector('.step1-title')
        step1Title.innerHTML = 'Click Book Now';
        step1Title.classList.remove('arabic-text');

        const step1Description = document.querySelector('.step1-description');
        step1Description.innerHTML = 'Click on the Book Now button below.';
        step1Description.classList.remove('arabic-text');

        const stepNumber2 = document.querySelector('.step2-number');
        stepNumber2.innerHTML = '2.';
        stepNumber2.classList.remove('arabic-text');
        
        const step2Title = document.querySelector('.step2-title')
        step2Title.innerHTML = 'Fill in the info & submit';
        step2Title.classList.remove('arabic-text');

        const step2Description = document.querySelector('.step2-description');
        step2Description.innerHTML = 'In next page, fill the details & click the yellow button.';
        step2Description.classList.remove('arabic-text')

        const stepNumber3 = document.querySelector('.step3-number');
        stepNumber3.innerHTML = '3.';
        stepNumber3.classList.remove('arabic-text');
        
        const step3Title = document.querySelector('.step3-title')
        step3Title.innerHTML = 'Press Send';
        step3Title.classList.remove('arabic-text');

        const step3Description = document.querySelector('.step3-description');
        step3Description.innerHTML = 'You will be directed to WhatsApp, just press send.';
        step3Description.classList.remove('arabic-text');

        const footerDescription = document.querySelector('.footer-visual-explanation-description');
        footerDescription.innerHTML = "This button below will start you on the first step, don't hesitate book now!";
        footerDescription.classList.remove('arabic-text');

        const footerCTAContent = document.querySelector('.cta-content-arabic');
        footerCTAContent.innerHTML = "<p>Book Now</p> <img class='polygon' src='ImagesFolder/Polygon4.png' loading='lazy'>";
        footerCTAContent.classList.add('cta-content');
        footerCTAContent.classList.remove('cta-content-arabic');

        language = 'English';
        console.log('Switched Language to English');

        localStorage.setItem('previousLanguage', JSON.stringify(language));
    }

    const arabicSidebar = document.querySelector('.sidebar-arabic');
    const sidebar = document.querySelector('.sidebar');


    if(arabicSidebar.classList.contains('sidebar-toggled-arabic') && !arabicSidebar.classList.contains('sidebar-close-arabic' )){
        arabicSidebar.classList.remove('sidebar-toggled-arabic');
        sidebar.classList.remove('sidebar-close');
        sidebar.classList.add('sidebar-toggled');
        header.style.position = 'fixed';
        hero.style.marginTop = 'clamp(0px,calc(var(--header-width)/3.2),114px)';
        console.log('English one sir:'+sidebar.classList)
        console.log('Arabic one sir:'+arabicSidebar.classList)

    }else if (sidebar.classList.contains('sidebar-toggled') && !sidebar.classList.contains('sidebar-close')){
        sidebar.classList.remove('sidebar-toggled');
        arabicSidebar.classList.remove('sidebar-close-arabic');
        arabicSidebar.classList.add('sidebar-toggled-arabic');
        header.style.position = 'fixed';
        hero.style.marginTop = 'clamp(0px,calc(var(--header-width)/3.2),114px)';
        console.log('English one sir:'+sidebar.classList);
        console.log('Arabic one sir:'+arabicSidebar.classList);
    }   

};
    







function hamburgerFunction(){

const langButton = document.querySelector('.language');

console.log(langButton.innerHTML)

if (langButton.innerHTML == 'ع'){

//English Version
//Step 1: Remove the hamburger element.
const hamburgerEF = document.querySelector('.hamburger-functional');
hamburgerEF.classList.remove('hamburger-functional');
hamburgerEF.classList.add('hamburger-functional-off');

//Step 2: Toggle the sidebar.
const sidebar = document.querySelector('.sidebar');
sidebar.classList.add('sidebar-toggled'); 
header.style.position = 'fixed';
hero.style.marginTop = 'clamp(0px,calc(var(--header-width)/3.2),114px)';

//Step 3: Show non-functional X.
const sidebarX = document.querySelector('.sidebar-x');
sidebarX.classList.add('sidebar-x-appear');
sidebarX.classList.remove('sidebar-x');

//Step 4: Removes non-functional X after 1 second.
setTimeout(function() {
    const sidebarXF = document.querySelector('.sidebar-x-functional');
    sidebarXF.classList.add('sidebar-x-functional-appear');

//Step 5: Show the functional X.
    sidebarX.classList.remove('sidebar-x-appear');
    sidebarX.classList.add('sidebar-x');
}, 1000);} else{
//Arabic Version
//Step 1: Remove the hamburger element.
hamburgerEF.classList.remove('hamburger-functional');
hamburgerEF.classList.add('hamburger-functional-off');

//Step 2: Toggle the sidebar.
const arabicSidebar = document.querySelector('.sidebar-arabic');
arabicSidebar.classList.add('sidebar-toggled-arabic'); 
header.style.position = 'fixed';
hero.style.marginTop = 'clamp(0px,calc(var(--header-width)/3.2),114px)';

//Step 3: Show non-functional X.
const sidebarX = document.querySelector('.sidebar-x');
sidebarX.classList.add('sidebar-x-appear');
sidebarX.classList.remove('sidebar-x');

//Step 4: Removes non-functional X after 1 second.
setTimeout(function() {
    const sidebarXF = document.querySelector('.sidebar-x-functional');
    sidebarXF.classList.add('sidebar-x-functional-appear');

//Step 5: Show the functional X.
    sidebarX.classList.remove('sidebar-x-appear');
    sidebarX.classList.add('sidebar-x');
}, 1000);
;}}


















;

function closeSidebar(){

if (document.querySelector('.sidebar')){
const sidebar = document.querySelector('.sidebar');
sidebar.classList.add('sidebar-close');
header.style.position = 'static';
hero.style.marginTop = '0px';

//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    sidebar.classList.remove('sidebar-toggled');
    sidebar.classList.remove('sidebar-close');
}, 1000);
};

if(document.querySelector('.sidebar-arabic')){

//Step 2: Toggle the sidebar close animation.
const arabicSidebar = document.querySelector('.sidebar-arabic');
arabicSidebar.classList.add('sidebar-close-arabic');


//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    arabicSidebar.classList.remove('sidebar-toggled-arabic');
    arabicSidebar.classList.remove('sidebar-close-arabic');
}, 1000);


};};







function sidebarX(){
//English Version
//Step 1: Remove the X.
const sidebarXF = document.querySelector('.sidebar-x-functional');
sidebarXF.classList.remove('sidebar-x-functional-appear');

//Step 2: Toggle the sidebar close animation.
const sidebar = document.querySelector('.sidebar');
sidebar.classList.add('sidebar-close');
header.style.position = 'static';
hero.style.marginTop = '0px';


//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    sidebar.classList.remove('sidebar-toggled');
    sidebar.classList.remove('sidebar-close');
}, 1000);

//Step 4: Show the non-functional hamburger.
const hamburgerE = document.querySelector('.hamburger');
hamburgerE.classList.remove('hmbrgr-off');
console.log('non-functional hamburger here')

//Step 5: Wait 1 second then remove the hamburger.
setTimeout(function() {
    hamburgerE.classList.add('hmbrgr-off');

//Step 6: Show the functional hamburger button.
const hamburgerEF = document.querySelector('.hamburger-functional-off');
hamburgerEF.classList.remove('hamburger-functional-off');
hamburgerEF.classList.add('hamburger-functional');
console.log('functional hamburger here');
console.log(hamburgerEF.classList);

}, 1000);
console.log(sidebar.classList);


//Arabic Version
//Step 1: Remove the X.
sidebarXF.classList.remove('sidebar-x-functional-appear');

//Step 2: Toggle the sidebar close animation.
const arabicSidebar = document.querySelector('.sidebar-arabic');
arabicSidebar.classList.add('sidebar-close-arabic');


//Step 3: Wait 1 second then remove the sidebar.
setTimeout(function() {
    arabicSidebar.classList.remove('sidebar-toggled-arabic');
    arabicSidebar.classList.remove('sidebar-close-arabic');
}, 1000);

//Step 4: Show the non-functional hamburger.
hamburgerE.classList.remove('hmbrgr-off');
console.log('non-functional hamburger here')

//Step 5: Wait 1 second then remove the hamburger.
setTimeout(function() {
    hamburgerE.classList.add('hmbrgr-off');

//Step 6: Show the functional hamburger button.
const hamburgerEF = document.querySelector('.hamburger-functional-off');
hamburgerEF.classList.remove('hamburger-functional-off');
hamburgerEF.classList.add('hamburger-functional');
console.log('functional hamburger here');
console.log(hamburgerEF.classList);

}, 1000);
console.log(sidebar.classList);


};



document.addEventListener("DOMContentLoaded", (event) => {
    console.log("DOM fully loaded and parsed");
});





const element = document.querySelector('.service-card1-canvas-arabic');

function logElementPosition() {
  const rect = element.getBoundingClientRect();
  const x = rect.left; // x-coordinate of the left border
  const y = rect.top;  // y-coordinate of the top border
  console.log(`Left border X: ${x.toFixed(6)}, Y: ${y.toFixed(6)}`);
}

// Log position on each resize
window.addEventListener('resize', () => {
  logElementPosition();
});

// Optionally, log the initial position
logElementPosition();



function eppPopUp (){

if (document.querySelector('.epp-pop-up')){

//Step 1: Header becomes fixed.
    const headerItemsContainer = document.querySelector('.header-items-container');
    headerItemsContainer.classList.remove('header-items-container');
    headerItemsContainer.classList.add('header-items-container-fixed');

//Step 2: EPP pop up appears.
    const popUp = document.querySelector('.epp-pop-up');
    popUp.classList.remove('epp-pop-up');
    popUp.classList.add('epp-pop-up-appear');

//Step 3: Functional Hamburger disappears.
    const hamburgerEF = document.querySelector('.hamburger-functional');
    hamburgerEF.classList.remove('hamburger-functional');
    hamburgerEF.classList.add('hamburger-functional-off');

//Step 4: Show the non-functional hamburger.
    const hamburgerE = document.querySelector('.hamburger');
    hamburgerE.classList.remove('hmbrgr-off');
    console.log('non-functional hamburger here')


    
console.log(popUp.classList);

} else if(document.querySelector('.epp-pop-up-appear')){
    console.log('Calling from 2nd click Boss');

//Step 1: Header becomes static.
    const headerItemsContainer = document.querySelector('.header-items-container-fixed');
    headerItemsContainer.classList.remove('header-items-container-fixed');
    headerItemsContainer.classList.add('header-items-container');

//Step 2: EPP pop up disappears.
    const popUp = document.querySelector('.epp-pop-up-appear');
    popUp.classList.remove('epp-pop-up-appear');
    popUp.classList.add('epp-pop-up');

//Step 3: Non functional hamburger disappears.
    setTimeout(function() {
        hamburgerE.classList.add('hmbrgr-off');

//Step 3: Show the functional hamburger button.
    const hamburgerEF = document.querySelector('.hamburger-functional-off');
    hamburgerEF.classList.remove('hamburger-functional-off');
    hamburgerEF.classList.add('hamburger-functional');
    console.log('functional hamburger here');
    console.log(hamburgerEF.classList);

    }, 1000);

    }

};


function galleryCategoryToggle(categoryClicked , itsContainer){
    if(document.querySelector('.gallery-category-active')){
        document.querySelector('.gallery-category-active').classList.remove('gallery-category-active');
        document.querySelector('.category-items-container-toggled')? document.querySelector('.category-items-container-toggled').classList.remove('category-items-container-toggled') : console.log('There is no toggled container');
        itsContainer.classList.add('category-items-container-toggled');
        console.log(itsContainer);        
        categoryClicked.classList.add('gallery-category-active');
        rect = categoryClicked.getBoundingClientRect();
        const xCoordinate = rect.x;
        console.log(xCoordinate);
        console.log(window.innerWidth);
        const style = window.getComputedStyle(categoryClicked);
        const width = style.width;
        const containerXCoordinates = document.querySelector('.gallery-section').getBoundingClientRect().x;
        console.log(`${containerXCoordinates}px are left of container`);
        console.log(xCoordinate - containerXCoordinates + 'is the final result')

        const toggleUnderline = document.querySelector('.toggle-underline');
        toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;
        toggleUnderline.style.width = width;


        
        const toggleContainer = document.querySelector('.gallery-bar-toggle-container');
        toggleContainer.style.justifyContent = ' flex-end';

    }else{
        categoryClicked.classList.add('gallery-category-active');
        document.querySelector('.category-items-container-toggled')? document.querySelector('.category-items-container-toggled').classList.remove('category-items-container-toggled') : console.log('There is no toggled container');
        itsContainer.classList.add('category-items-container-toggled');
        rect = categoryClicked.getBoundingClientRect();
        const xCoordinate = rect.x;

        const style = window.getComputedStyle(categoryClicked);
        const width = style.width;
        console.log(width);

        console.log(xCoordinate);
        console.log(window.innerWidth);
        console.log(xCoordinate - (window.innerWidth * 0.0674418605));
        const toggleUnderline = document.querySelector('.toggle-underline');
        toggleUnderline.style.marginLeft = `${xCoordinate - (containerXCoordinates)}px`;
        toggleUnderline.style.width = width;

        const toggleContainer = document.querySelector('.gallery-bar-toggle-container');
        toggleContainer.style.justifyContent = ' flex-end';

    }

    const portrait = itsContainer.querySelector('.portrait-mode');
    console.log(portrait)
    const landscape = itsContainer.querySelector('.landscape-mode');    
    console.log(landscape)

   
        portrait.classList.add('category-toggled-version');
        landscape.classList.remove('category-toggled-version'); 

        const galleryModeSwitchToggle = document.querySelector('.gallery-toggle-bar');
        galleryModeSwitchToggle.classList.add('p-toggle');
        galleryModeSwitchToggle.classList.remove('l-toggle');





};

function galleryModeSwitch(){
    const toggledCategoryContainer = document.querySelector('.category-items-container-toggled');
    console.log(toggledCategoryContainer);
    const portrait = toggledCategoryContainer.querySelector('.portrait-mode');
    console.log(portrait)
    const landscape = toggledCategoryContainer.querySelector('.landscape-mode');    
    console.log(landscape)
    const galleryModeSwitchToggle = document.querySelector('.gallery-toggle-bar');


    
    
    
    if(portrait.classList.contains('category-toggled-version')){
        portrait.classList.remove('category-toggled-version');


        landscape.classList.add('category-toggled-version');

        galleryModeSwitchToggle.classList.remove('p-toggle');
        galleryModeSwitchToggle.classList.add('l-toggle');

        const toggleContainer = document.querySelector('.gallery-bar-toggle-container');
        toggleContainer.style.justifyContent = ' flex-start';


        document.querySelector('.landscape-title').style.fontWeight = 'bold';
        document.querySelector('.portrait-title').style.fontWeight = '300';


    }else if (landscape.classList.contains('category-toggled-version')){

        portrait.classList.add('category-toggled-version');



        landscape.classList.remove('category-toggled-version'); 

        galleryModeSwitchToggle.classList.add('p-toggle');
        galleryModeSwitchToggle.classList.remove('l-toggle')

        const toggleContainer = document.querySelector('.gallery-bar-toggle-container');
        toggleContainer.style.justifyContent = ' flex-end';

        document.querySelector('.landscape-title').style.fontWeight = '300';
        document.querySelector('.portrait-title').style.fontWeight = 'bold';


    }else{
        portrait.classList.add('category-toggled-version');

        landscape.classList.remove('category-toggled-version'); 


        galleryModeSwitchToggle.classList.add('p-toggle');
        galleryModeSwitchToggle.classList.remove('l-toggle')


        document.querySelector('.landscape-title').style.fontWeight = '300';
        document.querySelector('.portrait-title').style.fontWeight = 'bold';

        const toggleContainer = document.querySelector('.gallery-bar-toggle-container');
        toggleContainer.style.justifyContent = ' flex-end';

    }
}


function tapToView (tapToViewURL){

  
    
    const tapToViewOverlay = document.querySelector('.image-display-overlay');
    tapToViewOverlay.classList.add('image-display-overlay-toggled')

    const viewedHolder = document.querySelector('.viewed-image-holder');

    viewedHolder.style.backgroundImage = `url(${tapToViewURL})`;

}

