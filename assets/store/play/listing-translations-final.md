# Google Play listing (copy + translations)

Single file for Play Console. Default **en-US** is the first locale block below; nine more follow for **Import translations (AI)**.

## Play Console

1. Upload this file: **Store presence** → **Import translations (AI)** → review each locale → Save.
2. **en-US full description:** import often strips line breaks. If that happens, paste only the **Full description** body under en-US (blank lines between sections) into the en-US field manually, then Save.

## Graphic assets (this folder)

| File | Spec |
|------|------|
| `icon-512.png` | High-res icon for Play, 512×512 (from `landing-page/assets/legacy/ios-light.png`, white; not the zoomed launcher) |
| `icon-512-adaptive.png` | Same size, from legacy `adaptive-icon.png` (reference only; upload `icon-512.png` to Play) |
| `feature-graphic.png` | Feature graphic, 1024×500, gradient only (default) |
| `feature-graphic-photo.png` | Optional: Italian photo on the right under blue wash |
| `phone-screenshot-*.png` | Phone screenshots (device captures; upscale for Play if needed) |

Regenerate launcher PNGs: `npm run generate:app-icons`. Then SVG-based Play assets: `npm run generate:store-assets` (never touches `phone-screenshot-*.png`). SVG mocks only in `placeholders/` via `npm run generate:store-assets -- --placeholder-screenshots`. Guard: `npm run test:device-screenshots`.

## Category suggestions

Primary: **Productivity**  
Tags: Productivity, Tools, Travel and local, Lifestyle

---

## en-US | English (United States)

**App name:** ProntoExpat

**Short description:** Step-by-step help for expats with Italian bureaucracy and daily life.

**Full description:**

Moving to Italy or already living here? Italian bureaucracy and daily life can feel overwhelming. ProntoExpat replaces hours of unreliable searching with fast, source-cited answers and a clear, personalized path through visas, documents, housing, healthcare and everyday admin. Free to use. No ads.

What you get

• Triage and your path: Take a short quiz (EU or non-EU, family, housing and more) to get a tailored checklist and prioritized next steps. Add your comune for more local context.
• Tasks: Track bureaucracy milestones and always know what to do next.
• Reminders: An in-app notification inbox plus optional push alerts for administrative deadlines (informational only).
• Resources: Guides and articles with links to trusted sources.
• Saved: Bookmark guides and articles to come back to later.
• Languages: App available in Arabic, Chinese, English, French, German, Hindi, Italian, Portuguese, Spanish and Ukrainian.
• Account: Sign in with email, Google or Apple. Your progress stays with your account.

ProntoExpat is a checklist and guidance tool, not an AI legal chat.

Important

ProntoExpat provides general information and organizational tools only. It is not legal or immigration advice and it is not affiliated with any Italian government body. Always verify requirements with official sources or qualified professionals.

Privacy

We respect your data. Read our Privacy Policy on the web or in the app (Profile > Legal).

Contact

ordinaedev@gmail.com

---

## it-IT | Italian

**App name:** ProntoExpat

**Short description:** Guida passo passo per expat: burocrazia e vita quotidiana in Italia.

**Full description:**

Ti stai trasferendo in Italia o ci vivi già? La burocrazia e la vita quotidiana possono essere schiaccianti. ProntoExpat sostituisce ore di ricerche poco affidabili con risposte rapide basate su fonti verificate e un percorso chiaro e personalizzato tra visti, documenti, casa, sanità e pratiche di ogni giorno. Gratuito. Senza pubblicità.

Cosa trovi

• Triage e il tuo percorso: rispondi a un breve questionario (UE o extra-UE, famiglia, alloggio e altro) per ottenere una checklist su misura e i prossimi passi in ordine di priorità. Aggiungi il tuo comune per un contesto più locale.
• Attività: segui le tappe burocratiche e scopri sempre cosa fare dopo.
• Promemoria: inbox delle notifiche in app e notifiche push facoltative per le scadenze amministrative (solo a scopo informativo).
• Risorse: guide e articoli con link a fonti affidabili.
• Salvati: aggiungi guide e articoli ai preferiti per rileggerli quando vuoi.
• Lingue: app disponibile in arabo, cinese, inglese, francese, tedesco, hindi, italiano, portoghese, spagnolo e ucraino.
• Account: accedi con email, Google o Apple. I tuoi progressi restano salvati nel tuo account.

ProntoExpat è uno strumento di checklist e orientamento, non una chat legale basata sull’IA.

Importante

ProntoExpat offre solo informazioni generali e strumenti organizzativi. Non costituisce consulenza legale né consulenza in materia di immigrazione e non è collegato ad alcun ente pubblico italiano. Verifica sempre i requisiti con fonti ufficiali o professionisti qualificati.

Privacy

Rispettiamo i tuoi dati. Leggi l’Informativa sulla privacy sul web o in app (Profilo → Legale).

Contatto

ordinaedev@gmail.com

---

## es-ES | Spanish (Spain)

**App name:** ProntoExpat

**Short description:** Guía paso a paso para expatriados: trámites y vida diaria en Italia.

**Full description:**

¿Te mudas a Italia o ya vives allí? La burocracia y la vida cotidiana pueden resultar abrumadoras. ProntoExpat sustituye horas de búsquedas poco fiables por respuestas rápidas con fuentes citadas y una ruta clara y personalizada por visados, documentos, vivienda, sanidad y trámites del día a día. Gratis. Sin anuncios.

Qué incluye

• Triage y tu ruta: responde a un cuestionario breve (UE o no UE, familia, vivienda y más) y obtén una lista de tareas a tu medida con los siguientes pasos por orden de prioridad. Añade tu comune para tener más contexto local.
• Tareas: sigue los hitos burocráticos y consulta siempre qué toca hacer después.
• Recordatorios: bandeja de avisos en la app y notificaciones push opcionales para plazos administrativos (solo informativas).
• Recursos: guías y artículos con enlaces a fuentes fiables.
• Guardados: guarda guías y artículos para consultarlos más tarde.
• Idiomas: app disponible en árabe, chino, inglés, francés, alemán, hindi, italiano, portugués, español y ucraniano.
• Cuenta: inicia sesión con email, Google o Apple. Tu progreso se guarda en tu cuenta.

ProntoExpat es una herramienta de listas de tareas y orientación, no un chat legal con IA.

Importante

ProntoExpat ofrece solo información general y herramientas de organización. No constituye asesoramiento legal ni migratorio y no está vinculado a ningún organismo público italiano. Comprueba siempre los requisitos con fuentes oficiales o profesionales cualificados.

Privacidad

Respetamos tus datos. Lee la Política de privacidad en la web o en la app (Perfil → Legal).

Contacto

ordinaedev@gmail.com

---

## fr-FR | French (France)

**App name:** ProntoExpat

**Short description:** Guide pas à pas pour expatriés : démarches et vie quotidienne en Italie.

**Full description:**

Vous vous installez en Italie ou y vivez déjà ? La bureaucratie et la vie quotidienne peuvent sembler écrasantes. ProntoExpat remplace des heures de recherches peu fiables par des réponses rapides étayées par des sources et un parcours clair et personnalisé à travers les visas, les documents, le logement, la santé et les démarches du quotidien. Gratuit. Sans publicité.

Ce que vous obtenez

• Triage et votre parcours : répondez à un court questionnaire (UE ou hors UE, famille, logement, etc.) pour obtenir une checklist sur mesure et des étapes classées par priorité. Ajoutez votre comune pour un contexte plus local.
• Tâches : suivez les étapes administratives et sachez toujours quoi faire ensuite.
• Rappels : boîte de notifications dans l’app et alertes push facultatives pour les échéances administratives (à titre informatif uniquement).
• Ressources : guides et articles avec liens vers des sources fiables.
• Enregistrés : gardez guides et articles de côté pour les retrouver plus tard.
• Langues : application disponible en arabe, chinois, anglais, français, allemand, hindi, italien, portugais, espagnol et ukrainien.
• Compte : connexion par e-mail, Google ou Apple. Votre progression reste liée à votre compte.

ProntoExpat est un outil de checklists et d’orientation, pas un chat juridique par IA.

Important

ProntoExpat fournit uniquement des informations générales et des outils d’organisation. Il ne constitue ni un conseil juridique ni un conseil en matière d’immigration et n’est affilié à aucune administration italienne. Vérifiez toujours les exigences auprès de sources officielles ou de professionnels qualifiés.

Confidentialité

Nous respectons vos données. Consultez la Politique de confidentialité sur le web ou dans l’app (Profil → Mentions légales).

Contact

ordinaedev@gmail.com

---

## de-DE | German (Germany)

**App name:** ProntoExpat

**Short description:** Schritt-für-Schritt-Hilfe für Expats: Bürokratie und Alltag in Italien.

**Full description:**

Planen Sie einen Umzug nach Italien oder leben Sie schon dort? Bürokratie und Alltag können überwältigend sein. ProntoExpat ersetzt stundenlanges, unzuverlässiges Suchen durch schnelle Antworten mit Quellenangaben und einen klaren, personalisierten Weg durch Visa, Dokumente, Wohnen, Gesundheit und Alltagsbürokratie. Kostenlos. Keine Werbung.

Das bietet die App

• Triage und Ihr Weg: Beantworten Sie einen kurzen Fragebogen (EU oder Nicht-EU, Familie, Wohnen u. a.) und erhalten Sie eine passende Checkliste mit priorisierten nächsten Schritten. Fügen Sie Ihr Comune hinzu, um mehr lokalen Kontext zu erhalten.
• Aufgaben: Verfolgen Sie bürokratische Meilensteine und wissen Sie immer, was als Nächstes ansteht.
• Erinnerungen: Benachrichtigungs-Postfach in der App plus optionale Push-Hinweise zu Fristen (nur zur Information).
• Ressourcen: Leitfäden und Artikel mit Links zu verlässlichen Quellen.
• Gespeichert: Merken Sie sich Leitfäden und Artikel zum späteren Lesen.
• Sprachen: App verfügbar auf Arabisch, Chinesisch, Englisch, Französisch, Deutsch, Hindi, Italienisch, Portugiesisch, Spanisch und Ukrainisch.
• Konto: Anmeldung per E-Mail, Google oder Apple. Ihr Fortschritt bleibt in Ihrem Konto erhalten.

ProntoExpat ist ein Checklisten- und Orientierungstool, kein KI-Rechtschat.

Wichtig

ProntoExpat bietet nur allgemeine Informationen und Organisationstools. Es ersetzt weder Rechts- noch Migrationsberatung und steht in keiner Verbindung zu italienischen Behörden. Prüfen Sie Anforderungen immer bei offiziellen Quellen oder qualifizierten Fachleuten.

Datenschutz

Wir respektieren Ihre Daten. Die Datenschutzerklärung finden Sie im Web oder in der App (Profil → Rechtliches).

Kontakt

ordinaedev@gmail.com

---

## pt-BR | Portuguese (Brazil)

**App name:** ProntoExpat

**Short description:** Guia passo a passo para expatriados: burocracia e vida cotidiana na Itália.

**Full description:**

Vai se mudar para a Itália ou já mora lá? A burocracia e o dia a dia podem parecer esmagadores. O ProntoExpat substitui horas de pesquisas pouco confiáveis por respostas rápidas com fontes citadas e um caminho claro e personalizado por vistos, documentos, moradia, saúde e a burocracia do dia a dia. Grátis. Sem anúncios.

O que você encontra

• Triagem e seu caminho: responda a um questionário curto (UE ou não UE, família, moradia e mais) e receba um checklist sob medida com os próximos passos por ordem de prioridade. Adicione seu comune para ter mais contexto local.
• Tarefas: acompanhe os marcos burocráticos e saiba sempre o que fazer a seguir.
• Lembretes: caixa de notificações no app e alertas push opcionais para prazos administrativos (apenas informativos).
• Recursos: guias e artigos com links para fontes confiáveis.
• Salvos: guarde guias e artigos para ler depois.
• Idiomas: app disponível em árabe, chinês, inglês, francês, alemão, hindi, italiano, português, espanhol e ucraniano.
• Conta: entre com e-mail, Google ou Apple. Seu progresso fica salvo na sua conta.

O ProntoExpat é uma ferramenta de checklist e orientação, não um chat jurídico com IA.

Importante

O ProntoExpat oferece apenas informações gerais e ferramentas de organização. Não constitui assessoria jurídica nem migratória e não é ligado a nenhum órgão público italiano. Confira sempre os requisitos com fontes oficiais ou profissionais qualificados.

Privacidade

Respeitamos seus dados. Leia a Política de Privacidade na web ou no app (Perfil → Legal).

Contato

ordinaedev@gmail.com

---

## ar | Arabic

**App name:** ProntoExpat

**Short description:** دليل خطوة بخطوة للمغتربين في الإجراءات الحكومية والحياة اليومية في إيطاليا.

**Full description:**

هل تنوي الانتقال إلى إيطاليا أم تعيش فيها بالفعل؟ قد تبدو البيروقراطية والحياة اليومية مرهقة. يستبدل ProntoExpat ساعات البحث غير الموثوق بإجابات سريعة مستندة إلى مصادر ومسار واضح ومخصص يشمل التأشيرات والوثائق والسكن والرعاية الصحية والمعاملات اليومية. مجاني. بدون إعلانات.

ماذا تحصل عليه

• التقييم ومسارك: أجب عن استبيان قصير (الاتحاد الأوروبي أو خارجه، العائلة، السكن وغيرها) لتحصل على قائمة مهام مناسبة لك وخطوات مرتبة حسب الأولوية. أضف بلديتك (comune) لمزيد من السياق المحلي.
• المهام: تابع مراحل الإجراءات الإدارية واعرف دائمًا الخطوة التالية.
• التذكيرات: صندوق إشعارات داخل التطبيق مع تنبيهات فورية اختيارية للمواعيد النهائية الإدارية (لأغراض إعلامية فقط).
• الموارد: أدلة ومقالات مع روابط لمصادر موثوقة.
• المحفوظات: احفظ الأدلة والمقالات للرجوع إليها لاحقًا.
• اللغات: التطبيق متاح بالعربية والصينية والإنجليزية والفرنسية والألمانية والهندية والإيطالية والبرتغالية والإسبانية والأوكرانية.
• الحساب: سجّل الدخول بالبريد الإلكتروني أو Google أو Apple. يبقى تقدمك محفوظًا في حسابك.

ProntoExpat أداة للقوائم والإرشاد، وليس محادثة قانونية بالذكاء الاصطناعي.

مهم

يوفر ProntoExpat معلومات عامة وأدوات تنظيمية فقط. لا يُعد استشارة قانونية أو استشارة في شؤون الهجرة وليس تابعًا لأي جهة حكومية إيطالية. تحقق دائمًا من المتطلبات عبر المصادر الرسمية أو مختصين مؤهلين.

الخصوصية

نحترم بياناتك. اطّلع على سياسة الخصوصية عبر الويب أو داخل التطبيق (الملف الشخصي → القانوني).

للتواصل

ordinaedev@gmail.com

---

## zh-CN | Chinese (Simplified)

**App name:** ProntoExpat

**Short description:** 为在意大利的外籍人士提供分步指引，轻松应对行政手续与日常生活。

**Full description:**

即将前往意大利，或已在意大利生活？意大利的官僚事务和日常生活可能令人不堪重负。ProntoExpat 以快速、有据可依的回答取代长时间不可靠的搜索，并为你提供清晰、个性化的路径，涵盖签证、文件、住房、医疗和日常行政事务。免费使用，无广告。

你将获得

• 评估与专属路径：回答简短问卷（欧盟或非欧盟、家庭、住房等），即可获得量身定制的清单和按优先级排列的下一步。添加所在 comune，还能获得更多本地信息。
• 任务：跟踪办事进度，随时了解下一步该做什么。
• 提醒：应用内通知收件箱，另有可选的行政截止日期推送提醒（仅供参考）。
• 资源：指南与文章，附可信来源链接。
• 收藏：收藏指南与文章，方便日后查看。
• 语言：应用界面支持阿拉伯语、中文、英语、法语、德语、印地语、意大利语、葡萄牙语、西班牙语和乌克兰语。
• 账户：可使用电子邮件、Google 或 Apple 登录，进度保存在你的账户中。

ProntoExpat 是清单与指引工具，不是 AI 法律咨询聊天。

重要说明

ProntoExpat 仅提供一般信息和组织工具，不构成法律建议或移民建议，也与任何意大利政府机构无关。请务必通过官方渠道或合格专业人士核实相关要求。

隐私

我们重视你的数据。请在网站或应用中查看隐私政策（个人资料 → 法律信息）。

联系

ordinaedev@gmail.com

---

## hi-IN | Hindi

**App name:** ProntoExpat

**Short description:** इटली में प्रवासियों के लिए चरण-दर-चरण गाइड: प्रशासनिक काम और रोज़मर्रा का जीवन।

**Full description:**

इटली जा रहे हैं या पहले से वहीं रहते हैं? इटली की ब्यूरोक्रेसी और रोज़मर्रा की ज़िंदगी भारी पड़ सकती है। ProntoExpat घंटों की अविश्वसनीय खोज की जगह तेज़, स्रोतों के साथ जवाब और वीज़ा, दस्तावेज़, आवास, स्वास्थ्य तथा रोज़मर्रा के सरकारी कामों के लिए एक स्पष्ट, व्यक्तिगत रास्ता देता है। मुफ़्त। कोई विज्ञापन नहीं।

आपको क्या मिलता है

• ट्रायज और आपका रास्ता: एक छोटी प्रश्नावली (EU या गैर-EU, परिवार, आवास आदि) भरें और पाएँ अपने अनुसार चेकलिस्ट व प्राथमिकता के क्रम में अगले कदम। स्थानीय जानकारी के लिए अपना comune जोड़ें।
• कार्य: प्रशासनिक पड़ावों को ट्रैक करें और हमेशा जानें कि आगे क्या करना है।
• रिमाइंडर: ऐप में नोटिफ़िकेशन इनबॉक्स, साथ ही प्रशासनिक समय-सीमाओं के लिए वैकल्पिक पुश अलर्ट (केवल जानकारी के लिए)।
• संसाधन: भरोसेमंद स्रोतों के लिंक वाले गाइड और लेख।
• सेव किए गए: गाइड और लेख बुकमार्क करें और बाद में दोबारा पढ़ें।
• भाषाएँ: ऐप अरबी, चीनी, अंग्रेज़ी, फ़्रेंच, जर्मन, हिंदी, इतालवी, पुर्तगाली, स्पेनिश और यूक्रेनी भाषा में उपलब्ध है।
• खाता: ईमेल, Google या Apple से साइन इन करें। आपकी प्रगति आपके खाते में सुरक्षित रहती है।

ProntoExpat चेकलिस्ट और मार्गदर्शन टूल है, AI कानूनी चैट नहीं।

महत्वपूर्ण

ProntoExpat केवल सामान्य जानकारी और संगठन से जुड़े टूल उपलब्ध कराता है। यह कानूनी सलाह या इमिग्रेशन संबंधी सलाह नहीं है और किसी इतालवी सरकारी संस्था से जुड़ा नहीं है। आवश्यकताओं की पुष्टि हमेशा आधिकारिक स्रोतों या योग्य पेशेवरों से करें।

गोपनीयता

हम आपके डेटा का सम्मान करते हैं। गोपनीयता नीति वेब या ऐप में पढ़ें (प्रोफ़ाइल → कानूनी)।

संपर्क

ordinaedev@gmail.com

---

## uk | Ukrainian

**App name:** ProntoExpat

**Short description:** Покрокові поради для експатів: бюрократія та щоденне життя в Італії.

**Full description:**

Переїжджаєте до Італії чи вже живете там? Італійська бюрократія та повсякденне життя можуть здаватися непосильними. ProntoExpat замінює години ненадійного пошуку швидкими відповідями з посиланнями на джерела та чітким персоналізованим маршрутом через візи, документи, житло, медицину та щоденну бюрократію. Безкоштовно. Без реклами.

Що ви отримуєте

• Тріаж і ваш шлях: пройдіть коротке опитування (ЄС чи ні, сім’я, житло тощо) і отримайте персональний чекліст та пріоритетні наступні кроки. Додайте свій comune, щоб мати більше локального контексту.
• Завдання: відстежуйте етапи оформлення документів і завжди знайте, що робити далі.
• Нагадування: скринька сповіщень у застосунку та необов’язкові push-сповіщення про адміністративні строки (лише для інформації).
• Ресурси: гіди й статті з посиланнями на надійні джерела.
• Збережене: додавайте гіди й статті до закладок, щоб повернутися до них пізніше.
• Мови: застосунок доступний арабською, китайською, англійською, французькою, німецькою, гінді, італійською, португальською, іспанською та українською.
• Обліковий запис: вхід через email, Google або Apple. Ваш прогрес зберігається в обліковому записі.

ProntoExpat є інструментом чеклістів і орієнтації, а не юридичним чатом зі штучним інтелектом.

Важливо

ProntoExpat надає лише загальну інформацію та інструменти для організації. Це не юридична й не міграційна консультація, і застосунок не пов’язаний з жодним державним органом Італії. Завжди перевіряйте вимоги в офіційних джерелах або звертайтеся до кваліфікованих фахівців.

Конфіденційність

Ми поважаємо ваші дані. Політику конфіденційності можна прочитати в мережі або в застосунку (Профіль → Правове).

Контакт

ordinaedev@gmail.com
