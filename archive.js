// =====================================================
// YOUSEF'S ARCHIVE - JAVASCRIPT (FINAL & INTEGRATED)
// =====================================================

let currentPage = 0;
const pages = document.querySelectorAll('.page');
const pageCounter = document.getElementById('pageCounter');

// تحديث عرض الصفحات والعداد
function updateBook() {
    pages.forEach((page, index) => {
        if (index === currentPage) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    });

    if (pageCounter) {
        pageCounter.textContent = `${currentPage + 1} / ${pages.length}`;
    }
}

// الانتقال للصفحة التالية
function nextPage() {
    if (currentPage < pages.length - 1) {
        currentPage++;
        updateBook();
        window.scrollTo(0, 0);
    }
}

// الانتقال للصفحة السابقة
function previousPage() {
    if (currentPage > 0) {
        currentPage--;
        updateBook();
        window.scrollTo(0, 0);
    }
}

// إظهار/إخفاء صورة بندق في صفحة LORE
function showBandaq() {
    const photo = document.querySelector('.bandaq-photo');
    if (photo) {
        if (photo.style.display === 'block') {
            photo.style.display = 'none';
        } else {
            photo.style.display = 'block';
        }
    }
}

// إظهار الملاحظة السرية عند الضغط على زعبولة في لوحة التحقيق
function toggleYousefEvidence() {
    const photoUnder = document.querySelector('.photo-under');
    const photoFront = document.querySelector('.yousef-photo-front');
    
    if (photoUnder && photoFront) {
        if (photoUnder.style.display === 'block') {
            photoUnder.style.display = 'none';
            photoFront.style.display = 'block';
        } else {
            photoUnder.style.display = 'block';
            photoFront.style.display = 'none';
        }
    }
}

// نظام الرسائل في صفحة "OPEN WHEN..." (بالمقالات الذكية والفلسفية)
function openLetter(type) {
    const letterBox = document.getElementById('letter');
    if (!letterBox) return;

    letterBox.style.display = 'block';

    let content = "";
    switch(type) {
        case 'babel':
            content = `<strong>مكتبة بابل (هل المعطيات حقيقية فعلاً؟):</strong><br>
            بعيداً عن الأساطير، قصة "مكتبة بابل" للكاتب خورخي لويس بورخيس مش مجرد خيال علمي، دي معضلة رياضية وفلسفية مرعبة. الفكرة إن فيه مكتبة بتضم عدد لا نهائي من الغرف، وكل غرفة فيها أرفف بتحتوي على كل كتاب ممكن تخيله.. ومش بس اللي اتكتب، دي فيها كل تركيبات الحروف الممكنة في الكون! يعني فيها الكتاب اللي بيشرح تفاصيل مستقبلك، وفيها ملايين الكتب المليانة طلاسم وخرابيط مالهاش أي معنى، وكتب تانية بتكذب الكتب دي أصلاً.<br><br>
            المرعب في المكتبة دي، واللي بيستفز العقل، إنك لو دخلتها هتقعد تدور سنين عشان تلاقي كتاب مفيد وسط ترليونات الكتب الوهمية. وda بيخليني أفكر في دماغك؛ هل أنت شايف إن العالم عامل زي مكتبة بابل العشوائية دي.. ولا شايف إن فيه طريقة معينة لترتيب الفوضى دي وتحليلها؟ ولو صادفت كتاب في المكتبة دي بيشرح شخصيتك الغريبة وطريقتك في تحليل التفاصيل.. هتقرأه بعناية، ولا هتقفل الغرفة وتعتبر إن بعض الأسرار أفضل وهي مجهولة؟`;
            break;

        case 'theseus':
            content = `<strong>معضلة سفينة ثيسيوس (مفهوم الهوية عبر الزمن):</strong><br>
            واحدة من أقدم المعضلات الفلسفية عند اليونان؛ لو افترضنا إن فيه سفينة أبحرت في البحر، وكل ما لوح خشب فيها يبوظ أو يقدّم، البحارة بيشيلوه ويحطوا مكانه لوح جديد.. لحد ما بعد سنين طويلة، ميبقاش فيه قطرة خشب واحدة من السفينة الأصلية موجودة.. هل السفينة دي لسة بتعتبر هي نفس السفينة؟ ولا بقت كيان تاني خالص؟<br><br>
            المعضلة دي مش عن السفن وبس، دي بتناقش "الهوية البشرية" عامة؛ الإنسان على مدار السنين خلايا جسمه بتتغير، أفكاره بتتجدد، تجاربه بتصقله، وطريقة تفكيره بتتحور. هل أنت نفس الشخص اللي كنت عليه من سنين؟ الإجابة الفلسفية إن الجوهر والنواة هما اللي بيخلو الكيان يحافظ على هويته رغم تبدل التفاصيل.<br><br>
            وعشان كده، بعيداً عن أي تعقيد، أتمنى دايماً إن الإنسان مهما تغيرت ظروفه أو تبدلت ألواح سفينته مع الوقت، يفضل محافظ على جوهره الحقيقي، وأتمنى دايماً تفضل 'زعبولة' بنفس الروح والـ Vibe اللي مش بيغيره الزمن!`;
            break;

        case 'tired':
            content = `<strong>عندما تكون متعباً:</strong><br>
            خذ نفساً عميقاً، وأغلق نوافذ عقلك الساهي لبرهة. لست مضطراً لترتيب العالم، ولا لفك أسرار السفن ولا المكتبات اليوم. خذ نفساً عميقاً ودع العالم يرتاح قليلاً من عناء تدقيقاتك.`;
            break;

        case 'random':
            content = `<strong>لسبب لا أعرفه:</strong><br>
            بعض الملفات في هذا الأرشيف وُجدت بلا سبب منطقي، تماماً كالأحاديث العفوية التي تبدأ بأغنية وتنتهي بلا شيء. ربما كُتب هذا الملف فقط ليذكرك بأن وجودك هنا، وبهذا القدر من الاختلاف، هو أفضل تفصيل تم توثيقه اليوم.`;
            break;

        default:
            content = "اختر ملفًا صحيحًا.";
    }

    letterBox.innerHTML = content;
}

// فتح الملف السري
function openSecretFile() {
    const msg = document.getElementById('secretMessage');
    if (msg) {
        msg.style.display = 'block';
        msg.innerHTML = "<strong>مفاجأة!</strong><br>لقد فتحت الملف الممنوع.. ولكن للأسف ليس هناك أي جريمة هنا، سوى أنك شخص لطيف جداً ويستحق كل خير.";
    }
}

// فتح تقرير الحوادث الصغير
function openNote() {
    const note = document.getElementById('incidentNote');
    if (note) {
        if (note.style.display === 'block') {
            note.style.display = 'none';
        } else {
            note.style.display = 'block';
        }
    }
}

// فتح وإغلاق النافذة المنبثقة للثعلب (Modal في منتصف الشاشة)
function toggleCutePopup() {
    const modal = document.getElementById('foxModalOverlay');
    if (modal) {
        if (modal.style.display === 'flex') {
            modal.style.display = 'none';
        } else {
            modal.style.display = 'flex';
        }
    }
}

// إغلاق النافذة عند الضغط في أي مكان خارج كارت الرسالة
function closePopupOnOverlay(event) {
    if (event.target.id === 'foxModalOverlay') {
        toggleCutePopup();
    }
}

// تفعيل وإلغاء وضع الليل الأزرق (Blueprint Mode)
function toggleBlueprintMode() {
    document.body.classList.toggle('blueprint-mode');
}

// التشغيل الأولي عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', () => {
    updateBook();
});
