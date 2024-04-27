import { computed as m, inject as Fe, provide as pt, onMounted as Gr, nextTick as Ur, onUnmounted as ci, getCurrentInstance as Se, isRef as si, toRefs as ne, customRef as di, getCurrentScope as fi, onScopeDispose as pi, unref as _e, ref as ee, watch as mt, watchEffect as Mn, defineComponent as _, shallowRef as rt, onBeforeUnmount as mi, triggerRef as hi, createVNode as c, mergeProps as be, h as Zn, reactive as gi, isVNode as Ht, Fragment as At, Teleport as vi } from "vue";
import { ConfigProvider as Xr, Layout as ze, Space as Kr, Spin as yi, Skeleton as bi, Menu as ht, Input as Si, Avatar as xi, Affix as Ci, Breadcrumb as Ti, Tabs as qn } from "ant-design-vue";
var Vr = function() {
  return {
    autoClearCache: Boolean,
    theme: Object,
    prefix: String,
    componentSize: String,
    intl: Object
  };
};
const Pi = {
  moneySymbol: "$",
  form: {
    lightFilter: {
      more: "المزيد",
      clear: "نظف",
      confirm: "تأكيد",
      itemUnit: "عناصر"
    }
  },
  tableForm: {
    search: "ابحث",
    reset: "إعادة تعيين",
    submit: "ارسال",
    collapsed: "مُقلص",
    expand: "مُوسع",
    inputPlaceholder: "الرجاء الإدخال",
    selectPlaceholder: "الرجاء الإختيار"
  },
  alert: {
    clear: "نظف",
    selected: "محدد",
    item: "عنصر"
  },
  pagination: {
    total: {
      range: " ",
      total: "من",
      item: "عناصر"
    }
  },
  tableToolBar: {
    leftPin: "ثبت على اليسار",
    rightPin: "ثبت على اليمين",
    noPin: "الغاء التثبيت",
    leftFixedTitle: "لصق على اليسار",
    rightFixedTitle: "لصق على اليمين",
    noFixedTitle: "إلغاء الإلصاق",
    reset: "إعادة تعيين",
    columnDisplay: "الأعمدة المعروضة",
    columnSetting: "الإعدادات",
    fullScreen: "وضع كامل الشاشة",
    exitFullScreen: "الخروج من وضع كامل الشاشة",
    reload: "تحديث",
    density: "الكثافة",
    densityDefault: "افتراضي",
    densityLarger: "أكبر",
    densityMiddle: "وسط",
    densitySmall: "مدمج"
  },
  stepsForm: {
    next: "التالي",
    prev: "السابق",
    submit: "أنهى"
  },
  loginForm: {
    submitText: "تسجيل الدخول"
  },
  editableTable: {
    action: {
      save: "أنقذ",
      cancel: "إلغاء الأمر",
      delete: "حذف",
      add: "إضافة صف من البيانات"
    }
  },
  switch: {
    open: "مفتوح",
    close: "غلق"
  }
}, wi = {
  moneySymbol: "€",
  form: {
    lightFilter: {
      more: "Més",
      clear: "Netejar",
      confirm: "Confirmar",
      itemUnit: "Elements"
    }
  },
  tableForm: {
    search: "Cercar",
    reset: "Netejar",
    submit: "Enviar",
    collapsed: "Expandir",
    expand: "Col·lapsar",
    inputPlaceholder: "Introduïu valor",
    selectPlaceholder: "Seleccioneu valor"
  },
  alert: {
    clear: "Netejar",
    selected: "Seleccionat",
    item: "Article"
  },
  pagination: {
    total: {
      range: " ",
      total: "de",
      item: "articles"
    }
  },
  tableToolBar: {
    leftPin: "Pin a l'esquerra",
    rightPin: "Pin a la dreta",
    noPin: "Sense Pin",
    leftFixedTitle: "Fixat a l'esquerra",
    rightFixedTitle: "Fixat a la dreta",
    noFixedTitle: "Sense fixar",
    reset: "Reiniciar",
    columnDisplay: "Mostrar Columna",
    columnSetting: "Configuració",
    fullScreen: "Pantalla Completa",
    exitFullScreen: "Sortir Pantalla Completa",
    reload: "Refrescar",
    density: "Densitat",
    densityDefault: "Per Defecte",
    densityLarger: "Llarg",
    densityMiddle: "Mitjà",
    densitySmall: "Compacte"
  },
  stepsForm: {
    next: "Següent",
    prev: "Anterior",
    submit: "Finalizar"
  },
  loginForm: {
    submitText: "Entrar"
  },
  editableTable: {
    action: {
      save: "Guardar",
      cancel: "Cancel·lar",
      delete: "Eliminar",
      add: "afegir una fila de dades"
    }
  },
  switch: {
    open: "obert",
    close: "tancat"
  }
}, $i = {
  moneySymbol: "Kč",
  deleteThisLine: "Smazat tento řádek",
  copyThisLine: "Kopírovat tento řádek",
  form: {
    lightFilter: {
      more: "Víc",
      clear: "Vymazat",
      confirm: "Potvrdit",
      itemUnit: "Položky"
    }
  },
  tableForm: {
    search: "Dotaz",
    reset: "Resetovat",
    submit: "Odeslat",
    collapsed: "Zvětšit",
    expand: "Zmenšit",
    inputPlaceholder: "Zadejte prosím",
    selectPlaceholder: "Vyberte prosím"
  },
  alert: {
    clear: "Vymazat",
    selected: "Vybraný",
    item: "Položka"
  },
  pagination: {
    total: {
      range: " ",
      total: "z",
      item: "položek"
    }
  },
  tableToolBar: {
    leftPin: "Připnout doleva",
    rightPin: "Připnout doprava",
    noPin: "Odepnuto",
    leftFixedTitle: "Fixováno nalevo",
    rightFixedTitle: "Fixováno napravo",
    noFixedTitle: "Neopraveno",
    reset: "Resetovat",
    columnDisplay: "Zobrazení sloupců",
    columnSetting: "Nastavení",
    fullScreen: "Celá obrazovka",
    exitFullScreen: "Ukončete celou obrazovku",
    reload: "Obnovit",
    density: "Hustota",
    densityDefault: "Výchozí",
    densityLarger: "Větší",
    densityMiddle: "Střední",
    densitySmall: "Kompaktní"
  },
  stepsForm: {
    next: "Další",
    prev: "Předchozí",
    submit: "Dokončit"
  },
  loginForm: {
    submitText: "Přihlásit se"
  },
  editableTable: {
    onlyOneLineEditor: "Upravit lze pouze jeden řádek",
    action: {
      save: "Uložit",
      cancel: "Zrušit",
      delete: "Vymazat",
      add: "přidat řádek dat"
    }
  },
  switch: {
    open: "otevřít",
    close: "zavřít"
  }
}, Oi = {
  moneySymbol: "€",
  form: {
    lightFilter: {
      more: "Mehr",
      clear: "Zurücksetzen",
      confirm: "Bestätigen",
      itemUnit: "Einträge"
    }
  },
  tableForm: {
    search: "Suchen",
    reset: "Zurücksetzen",
    submit: "Absenden",
    collapsed: "Zeige mehr",
    expand: "Zeige weniger",
    inputPlaceholder: "Bitte eingeben",
    selectPlaceholder: "Bitte auswählen"
  },
  alert: {
    clear: "Zurücksetzen",
    selected: "Ausgewählt",
    item: "Eintrag"
  },
  pagination: {
    total: {
      range: " ",
      total: "von",
      item: "Einträgen"
    }
  },
  tableToolBar: {
    leftPin: "Links anheften",
    rightPin: "Rechts anheften",
    noPin: "Nicht angeheftet",
    leftFixedTitle: "Links fixiert",
    rightFixedTitle: "Rechts fixiert",
    noFixedTitle: "Nicht fixiert",
    reset: "Zurücksetzen",
    columnDisplay: "Angezeigte Reihen",
    columnSetting: "Einstellungen",
    fullScreen: "Vollbild",
    exitFullScreen: "Vollbild verlassen",
    reload: "Aktualisieren",
    density: "Abstand",
    densityDefault: "Standard",
    densityLarger: "Größer",
    densityMiddle: "Mittel",
    densitySmall: "Kompakt"
  },
  stepsForm: {
    next: "Weiter",
    prev: "Zurück",
    submit: "Abschließen"
  },
  loginForm: {
    submitText: "Anmelden"
  },
  editableTable: {
    action: {
      save: "Retten",
      cancel: "Abbrechen",
      delete: "Löschen",
      add: "Hinzufügen einer Datenzeile"
    }
  },
  switch: {
    open: "offen",
    close: "schließen"
  }
}, Mi = {
  moneySymbol: "£",
  form: {
    lightFilter: {
      more: "More",
      clear: "Clear",
      confirm: "Confirm",
      itemUnit: "Items"
    }
  },
  tableForm: {
    search: "Query",
    reset: "Reset",
    submit: "Submit",
    collapsed: "Expand",
    expand: "Collapse",
    inputPlaceholder: "Please enter",
    selectPlaceholder: "Please select"
  },
  alert: {
    clear: "Clear",
    selected: "Selected",
    item: "Item"
  },
  pagination: {
    total: {
      range: " ",
      total: "of",
      item: "items"
    }
  },
  tableToolBar: {
    leftPin: "Pin to left",
    rightPin: "Pin to right",
    noPin: "Unpinned",
    leftFixedTitle: "Fixed to the left",
    rightFixedTitle: "Fixed to the right",
    noFixedTitle: "Not Fixed",
    reset: "Reset",
    columnDisplay: "Column Display",
    columnSetting: "Table Settings",
    fullScreen: "Full Screen",
    exitFullScreen: "Exit Full Screen",
    reload: "Refresh",
    density: "Density",
    densityDefault: "Default",
    densityLarger: "Larger",
    densityMiddle: "Middle",
    densitySmall: "Compact"
  },
  stepsForm: {
    next: "Next",
    prev: "Previous",
    submit: "Finish"
  },
  loginForm: {
    submitText: "Login"
  },
  editableTable: {
    action: {
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      add: "add a row of data"
    }
  },
  switch: {
    open: "open",
    close: "close"
  }
}, Ii = {
  moneySymbol: "$",
  deleteThisLine: "Delete this line",
  copyThisLine: "Copy this line",
  form: {
    lightFilter: {
      more: "More",
      clear: "Clear",
      confirm: "Confirm",
      itemUnit: "Items"
    }
  },
  tableForm: {
    search: "Query",
    reset: "Reset",
    submit: "Submit",
    collapsed: "Expand",
    expand: "Collapse",
    inputPlaceholder: "Please enter",
    selectPlaceholder: "Please select"
  },
  alert: {
    clear: "Clear",
    selected: "Selected",
    item: "Item"
  },
  pagination: {
    total: {
      range: " ",
      total: "of",
      item: "items"
    }
  },
  tableToolBar: {
    leftPin: "Pin to left",
    rightPin: "Pin to right",
    noPin: "Unpinned",
    leftFixedTitle: "Fixed to the left",
    rightFixedTitle: "Fixed to the right",
    noFixedTitle: "Not Fixed",
    reset: "Reset",
    columnDisplay: "Column Display",
    columnSetting: "Table Settings",
    fullScreen: "Full Screen",
    exitFullScreen: "Exit Full Screen",
    reload: "Refresh",
    density: "Density",
    densityDefault: "Default",
    densityLarger: "Larger",
    densityMiddle: "Middle",
    densitySmall: "Compact"
  },
  stepsForm: {
    next: "Next",
    prev: "Previous",
    submit: "Finish"
  },
  loginForm: {
    submitText: "Login"
  },
  editableTable: {
    onlyOneLineEditor: "Only one line can be edited",
    action: {
      save: "Save",
      cancel: "Cancel",
      delete: "Delete",
      add: "add a row of data"
    }
  },
  switch: {
    open: "open",
    close: "close"
  }
}, Fi = {
  moneySymbol: "€",
  form: {
    lightFilter: {
      more: "Más",
      clear: "Limpiar",
      confirm: "Confirmar",
      itemUnit: "artículos"
    }
  },
  tableForm: {
    search: "Buscar",
    reset: "Limpiar",
    submit: "Submit",
    collapsed: "Expandir",
    expand: "Colapsar",
    inputPlaceholder: "Ingrese valor",
    selectPlaceholder: "Seleccione valor"
  },
  alert: {
    clear: "Limpiar",
    selected: "Seleccionado",
    item: "Articulo"
  },
  pagination: {
    total: {
      range: " ",
      total: "de",
      item: "artículos"
    }
  },
  tableToolBar: {
    leftPin: "Pin a la izquierda",
    rightPin: "Pin a la derecha",
    noPin: "Sin Pin",
    leftFixedTitle: "Fijado a la izquierda",
    rightFixedTitle: "Fijado a la derecha",
    noFixedTitle: "Sin Fijar",
    reset: "Reiniciar",
    columnDisplay: "Mostrar Columna",
    columnSetting: "Configuración",
    fullScreen: "Pantalla Completa",
    exitFullScreen: "Salir Pantalla Completa",
    reload: "Refrescar",
    density: "Densidad",
    densityDefault: "Por Defecto",
    densityLarger: "Largo",
    densityMiddle: "Medio",
    densitySmall: "Compacto"
  },
  stepsForm: {
    next: "Siguiente",
    prev: "Anterior",
    submit: "Finalizar"
  },
  loginForm: {
    submitText: "Entrar"
  },
  editableTable: {
    action: {
      save: "Guardar",
      cancel: "Descartar",
      delete: "Borrar",
      add: "añadir una fila de datos"
    }
  },
  switch: {
    open: "abrir",
    close: "cerrar"
  }
}, ji = {
  moneySymbol: "تومان",
  form: {
    lightFilter: {
      more: "بیشتر",
      clear: "پاک کردن",
      confirm: "تایید",
      itemUnit: "مورد"
    }
  },
  tableForm: {
    search: "جستجو",
    reset: "بازنشانی",
    submit: "تایید",
    collapsed: "نمایش بیشتر",
    expand: "نمایش کمتر",
    inputPlaceholder: "پیدا کنید",
    selectPlaceholder: "انتخاب کنید"
  },
  alert: {
    clear: "پاک سازی",
    selected: "انتخاب",
    item: "مورد"
  },
  pagination: {
    total: {
      range: " ",
      total: "از",
      item: "مورد"
    }
  },
  tableToolBar: {
    leftPin: "سنجاق به چپ",
    rightPin: "سنجاق به راست",
    noPin: "سنجاق نشده",
    leftFixedTitle: "ثابت شده در چپ",
    rightFixedTitle: "ثابت شده در راست",
    noFixedTitle: "شناور",
    reset: "بازنشانی",
    columnDisplay: "نمایش همه",
    columnSetting: "تنظیمات",
    fullScreen: "تمام صفحه",
    exitFullScreen: "خروج از حالت تمام صفحه",
    reload: "تازه سازی",
    density: "تراکم",
    densityDefault: "پیش فرض",
    densityLarger: "بزرگ",
    densityMiddle: "متوسط",
    densitySmall: "کوچک"
  },
  stepsForm: {
    next: "بعدی",
    prev: "قبلی",
    submit: "اتمام"
  },
  loginForm: {
    submitText: "ورود"
  },
  editableTable: {
    action: {
      save: "ذخیره",
      cancel: "لغو",
      delete: "حذف",
      add: "یک ردیف داده اضافه کنید"
    }
  },
  switch: {
    open: "باز",
    close: "نزدیک"
  }
}, Bi = {
  moneySymbol: "€",
  form: {
    lightFilter: {
      more: "Plus",
      clear: "Effacer",
      confirm: "Confirmer",
      itemUnit: "Items"
    }
  },
  tableForm: {
    search: "Rechercher",
    reset: "Réinitialiser",
    submit: "Envoyer",
    collapsed: "Agrandir",
    expand: "Réduire",
    inputPlaceholder: "Entrer une valeur",
    selectPlaceholder: "Sélectionner une valeur"
  },
  alert: {
    clear: "Réinitialiser",
    selected: "Sélectionné",
    item: "Item"
  },
  pagination: {
    total: {
      range: " ",
      total: "sur",
      item: "éléments"
    }
  },
  tableToolBar: {
    leftPin: "Épingler à gauche",
    rightPin: "Épingler à gauche",
    noPin: "Sans épingle",
    leftFixedTitle: "Fixer à gauche",
    rightFixedTitle: "Fixer à droite",
    noFixedTitle: "Non fixé",
    reset: "Réinitialiser",
    columnDisplay: "Affichage colonne",
    columnSetting: "Réglages",
    fullScreen: "Plein écran",
    exitFullScreen: "Quitter Plein écran",
    reload: "Rafraichir",
    density: "Densité",
    densityDefault: "Par défaut",
    densityLarger: "Larger",
    densityMiddle: "Moyenne",
    densitySmall: "Compacte"
  },
  stepsForm: {
    next: "Suivante",
    prev: "Précédente",
    submit: "Finaliser"
  },
  loginForm: {
    submitText: "Se connecter"
  },
  editableTable: {
    action: {
      save: "Sauvegarder",
      cancel: "Annuler",
      delete: "Supprimer",
      add: "ajouter une ligne de données"
    }
  },
  switch: {
    open: "ouvert",
    close: "près"
  }
}, Ai = {
  moneySymbol: "₪",
  deleteThisLine: "מחק שורה זו",
  copyThisLine: "העתק שורה זו",
  form: {
    lightFilter: {
      more: "יותר",
      clear: "נקה",
      confirm: "אישור",
      itemUnit: "פריטים"
    }
  },
  tableForm: {
    search: "חיפוש",
    reset: "איפוס",
    submit: "שלח",
    collapsed: "הרחב",
    expand: "כווץ",
    inputPlaceholder: "אנא הכנס",
    selectPlaceholder: "אנא בחר"
  },
  alert: {
    clear: "נקה",
    selected: "נבחר",
    item: "פריט"
  },
  pagination: {
    total: {
      range: " ",
      total: "מתוך",
      item: "פריטים"
    }
  },
  tableToolBar: {
    leftPin: "הצמד לשמאל",
    rightPin: "הצמד לימין",
    noPin: "לא מצורף",
    leftFixedTitle: "מוצמד לשמאל",
    rightFixedTitle: "מוצמד לימין",
    noFixedTitle: "לא מוצמד",
    reset: "איפוס",
    columnDisplay: "תצוגת עמודות",
    columnSetting: "הגדרות",
    fullScreen: "מסך מלא",
    exitFullScreen: "צא ממסך מלא",
    reload: "רענן",
    density: "רזולוציה",
    densityDefault: "ברירת מחדל",
    densityLarger: "גדול",
    densityMiddle: "בינוני",
    densitySmall: "קטן"
  },
  stepsForm: {
    next: "הבא",
    prev: "קודם",
    submit: "סיום"
  },
  loginForm: {
    submitText: "כניסה"
  },
  editableTable: {
    onlyOneLineEditor: "ניתן לערוך רק שורה אחת",
    action: {
      save: "שמור",
      cancel: "ביטול",
      delete: "מחיקה",
      add: "הוסף שורת נתונים"
    }
  },
  switch: {
    open: "פתח",
    close: "סגור"
  }
}, ki = {
  moneySymbol: "kn",
  form: {
    lightFilter: {
      more: "Više",
      clear: "Očisti",
      confirm: "Potvrdi",
      itemUnit: "Stavke"
    }
  },
  tableForm: {
    search: "Pretraži",
    reset: "Poništi",
    submit: "Potvrdi",
    collapsed: "Raširi",
    expand: "Skupi",
    inputPlaceholder: "Unesite",
    selectPlaceholder: "Odaberite"
  },
  alert: {
    clear: "Očisti",
    selected: "Odaberi",
    item: "stavke"
  },
  pagination: {
    total: {
      range: " ",
      total: "od",
      item: "stavke"
    }
  },
  tableToolBar: {
    leftPin: "Prikači lijevo",
    rightPin: "Prikači desno",
    noPin: "Bez prikačenja",
    leftFixedTitle: "Fiksiraj lijevo",
    rightFixedTitle: "Fiksiraj desno",
    noFixedTitle: "Bez fiksiranja",
    reset: "Resetiraj",
    columnDisplay: "Prikaz stupaca",
    columnSetting: "Postavke",
    fullScreen: "Puni zaslon",
    exitFullScreen: "Izađi iz punog zaslona",
    reload: "Ponovno učitaj",
    density: "Veličina",
    densityDefault: "Zadano",
    densityLarger: "Veliko",
    densityMiddle: "Srednje",
    densitySmall: "Malo"
  },
  stepsForm: {
    next: "Sljedeći",
    prev: "Prethodni",
    submit: "Kraj"
  },
  loginForm: {
    submitText: "Prijava"
  },
  editableTable: {
    action: {
      save: "Spremi",
      cancel: "Odustani",
      delete: "Obriši",
      add: "dodajte red podataka"
    }
  },
  switch: {
    open: "otvori",
    close: "zatvori"
  }
}, Ei = {
  moneySymbol: "RP",
  form: {
    lightFilter: {
      more: "Lebih",
      clear: "Hapus",
      confirm: "Konfirmasi",
      itemUnit: "Unit"
    }
  },
  tableForm: {
    search: "Cari",
    reset: "Atur ulang",
    submit: "Kirim",
    collapsed: "Lebih sedikit",
    expand: "Lebih banyak",
    inputPlaceholder: "Masukkan pencarian",
    selectPlaceholder: "Pilih"
  },
  alert: {
    clear: "Hapus",
    selected: "Dipilih",
    item: "Butir"
  },
  pagination: {
    total: {
      range: " ",
      total: "Dari",
      item: "Butir"
    }
  },
  tableToolBar: {
    leftPin: "Pin kiri",
    rightPin: "Pin kanan",
    noPin: "Tidak ada pin",
    leftFixedTitle: "Rata kiri",
    rightFixedTitle: "Rata kanan",
    noFixedTitle: "Tidak tetap",
    reset: "Atur ulang",
    columnDisplay: "Tampilan kolom",
    columnSetting: "Pengaturan",
    fullScreen: "Layar penuh",
    exitFullScreen: "Keluar layar penuh",
    reload: "Atur ulang",
    density: "Kerapatan",
    densityDefault: "Standar",
    densityLarger: "Lebih besar",
    densityMiddle: "Sedang",
    densitySmall: "Rapat"
  },
  stepsForm: {
    next: "Selanjutnya",
    prev: "Sebelumnya",
    submit: "Selesai"
  },
  loginForm: {
    submitText: "Login"
  },
  editableTable: {
    action: {
      save: "simpan",
      cancel: "batal",
      delete: "hapus",
      add: "Tambahkan baris data"
    }
  },
  switch: {
    open: "buka",
    close: "tutup"
  }
}, Ri = {
  moneySymbol: "€",
  form: {
    lightFilter: {
      more: "più",
      clear: "pulisci",
      confirm: "conferma",
      itemUnit: "elementi"
    }
  },
  tableForm: {
    search: "Filtra",
    reset: "Pulisci",
    submit: "Invia",
    collapsed: "Espandi",
    expand: "Contrai",
    inputPlaceholder: "Digita",
    selectPlaceholder: "Seleziona"
  },
  alert: {
    clear: "Rimuovi",
    selected: "Selezionati",
    item: "elementi"
  },
  pagination: {
    total: {
      range: " ",
      total: "di",
      item: "elementi"
    }
  },
  tableToolBar: {
    leftPin: "Fissa a sinistra",
    rightPin: "Fissa a destra",
    noPin: "Ripristina posizione",
    leftFixedTitle: "Fissato a sinistra",
    rightFixedTitle: "Fissato a destra",
    noFixedTitle: "Non fissato",
    reset: "Ripristina",
    columnDisplay: "Disposizione colonne",
    columnSetting: "Impostazioni",
    fullScreen: "Modalità schermo intero",
    exitFullScreen: "Esci da modalità schermo intero",
    reload: "Ricarica",
    density: "Grandezza tabella",
    densityDefault: "predefinito",
    densityLarger: "Grande",
    densityMiddle: "Media",
    densitySmall: "Compatta"
  },
  stepsForm: {
    next: "successivo",
    prev: "precedente",
    submit: "finisci"
  },
  loginForm: {
    submitText: "Accedi"
  },
  editableTable: {
    action: {
      save: "salva",
      cancel: "annulla",
      delete: "Delete",
      add: "add a row of data"
    }
  },
  switch: {
    open: "open",
    close: "chiudi"
  }
}, Li = {
  moneySymbol: "¥",
  form: {
    lightFilter: {
      more: "更に",
      clear: "クリア",
      confirm: "確認",
      itemUnit: "アイテム"
    }
  },
  tableForm: {
    search: "検索",
    reset: "リセット",
    submit: "送信",
    collapsed: "拡大",
    expand: "折畳",
    inputPlaceholder: "入力してください",
    selectPlaceholder: "選択してください"
  },
  alert: {
    clear: "クリア",
    selected: "選択した",
    item: "アイテム"
  },
  pagination: {
    total: {
      range: "レコード",
      total: "/合計",
      item: " "
    }
  },
  tableToolBar: {
    leftPin: "左に固定",
    rightPin: "右に固定",
    noPin: "キャンセル",
    leftFixedTitle: "左に固定された項目",
    rightFixedTitle: "右に固定された項目",
    noFixedTitle: "固定されてない項目",
    reset: "リセット",
    columnDisplay: "表示列",
    columnSetting: "列表示設定",
    fullScreen: "フルスクリーン",
    exitFullScreen: "終了",
    reload: "更新",
    density: "行高",
    densityDefault: "デフォルト",
    densityLarger: "大",
    densityMiddle: "中",
    densitySmall: "小"
  },
  stepsForm: {
    next: "次へ",
    prev: "前へ",
    submit: "送信"
  },
  loginForm: {
    submitText: "ログイン"
  },
  editableTable: {
    action: {
      save: "保存",
      cancel: "キャンセル",
      delete: "削除",
      add: "追加"
    }
  },
  switch: {
    open: "開く",
    close: "閉じる"
  }
}, Hi = {
  moneySymbol: "₩",
  form: {
    lightFilter: {
      more: "더보기",
      clear: "초기화",
      confirm: "확인",
      itemUnit: "건수"
    }
  },
  tableForm: {
    search: "조회",
    reset: "초기화",
    submit: "제출",
    collapsed: "확장",
    expand: "닫기",
    inputPlaceholder: "입력해 주세요",
    selectPlaceholder: "선택해 주세요"
  },
  alert: {
    clear: "취소",
    selected: "선택",
    item: "건"
  },
  pagination: {
    total: {
      range: " ",
      total: "/ 총",
      item: "건"
    }
  },
  tableToolBar: {
    leftPin: "왼쪽으로 핀",
    rightPin: "오른쪽으로 핀",
    noPin: "핀 제거",
    leftFixedTitle: "왼쪽으로 고정",
    rightFixedTitle: "오른쪽으로 고정",
    noFixedTitle: "비고정",
    reset: "초기화",
    columnDisplay: "컬럼 표시",
    columnSetting: "설정",
    fullScreen: "전체 화면",
    exitFullScreen: "전체 화면 취소",
    reload: "새로 고침",
    density: "여백",
    densityDefault: "기본",
    densityLarger: "많은 여백",
    densityMiddle: "중간 여백",
    densitySmall: "좁은 여백"
  },
  stepsForm: {
    next: "다음",
    prev: "이전",
    submit: "종료"
  },
  loginForm: {
    submitText: "로그인"
  },
  editableTable: {
    action: {
      save: "저장",
      cancel: "취소",
      delete: "삭제",
      add: "데이터 행 추가"
    }
  },
  switch: {
    open: "열",
    close: "가까 운"
  }
}, Di = {
  moneySymbol: "₮",
  form: {
    lightFilter: {
      more: "Илүү",
      clear: "Цэвэрлэх",
      confirm: "Баталгаажуулах",
      itemUnit: "Нэгжүүд"
    }
  },
  tableForm: {
    search: "Хайх",
    reset: "Шинэчлэх",
    submit: "Илгээх",
    collapsed: "Өргөтгөх",
    expand: "Хураах",
    inputPlaceholder: "Утга оруулна уу",
    selectPlaceholder: "Утга сонгоно уу"
  },
  alert: {
    clear: "Цэвэрлэх",
    selected: "Сонгогдсон",
    item: "Нэгж"
  },
  pagination: {
    total: {
      range: " ",
      total: "Нийт",
      item: "мөр"
    }
  },
  tableToolBar: {
    leftPin: "Зүүн тийш бэхлэх",
    rightPin: "Баруун тийш бэхлэх",
    noPin: "Бэхлэхгүй",
    leftFixedTitle: "Зүүн зэрэгцүүлэх",
    rightFixedTitle: "Баруун зэрэгцүүлэх",
    noFixedTitle: "Зэрэгцүүлэхгүй",
    reset: "Шинэчлэх",
    columnDisplay: "Баганаар харуулах",
    columnSetting: "Тохиргоо",
    fullScreen: "Бүтэн дэлгэцээр",
    exitFullScreen: "Бүтэн дэлгэц цуцлах",
    reload: "Шинэчлэх",
    density: "Хэмжээ",
    densityDefault: "Хэвийн",
    densityLarger: "Том",
    densityMiddle: "Дунд",
    densitySmall: "Жижиг"
  },
  stepsForm: {
    next: "Дараах",
    prev: "Өмнөх",
    submit: "Дуусгах"
  },
  loginForm: {
    submitText: "Нэвтрэх"
  },
  editableTable: {
    action: {
      save: "Хадгалах",
      cancel: "Цуцлах",
      delete: "Устгах",
      add: "Мөр нэмэх"
    }
  },
  switch: {
    open: "Нээх",
    close: "Хаах"
  }
}, _i = {
  moneySymbol: "RM",
  form: {
    lightFilter: {
      more: "Lebih banyak",
      clear: "Jelas",
      confirm: "Mengesahkan",
      itemUnit: "Item"
    }
  },
  tableForm: {
    search: "Cari",
    reset: "Menetapkan semula",
    submit: "Hantar",
    collapsed: "Kembang",
    expand: "Kuncup",
    inputPlaceholder: "Sila masuk",
    selectPlaceholder: "Sila pilih"
  },
  alert: {
    clear: "Padam",
    selected: "Dipilih",
    item: "Item"
  },
  pagination: {
    total: {
      range: " ",
      total: "daripada",
      item: "item"
    }
  },
  tableToolBar: {
    leftPin: "Pin ke kiri",
    rightPin: "Pin ke kanan",
    noPin: "Tidak pin",
    leftFixedTitle: "Tetap ke kiri",
    rightFixedTitle: "Tetap ke kanan",
    noFixedTitle: "Tidak Tetap",
    reset: "Menetapkan semula",
    columnDisplay: "Lajur",
    columnSetting: "Settings",
    fullScreen: "Full Screen",
    exitFullScreen: "Keluar Full Screen",
    reload: "Muat Semula",
    density: "Densiti",
    densityDefault: "Biasa",
    densityLarger: "Besar",
    densityMiddle: "Tengah",
    densitySmall: "Kecil"
  },
  stepsForm: {
    next: "Seterusnya",
    prev: "Sebelumnya",
    submit: "Selesai"
  },
  loginForm: {
    submitText: "Log Masuk"
  },
  editableTable: {
    action: {
      save: "Simpan",
      cancel: "Membatalkan",
      delete: "Menghapuskan",
      add: "tambah baris data"
    }
  },
  switch: {
    open: "Terbuka",
    close: "Tutup"
  }
}, zi = {
  moneySymbol: "zł",
  form: {
    lightFilter: {
      more: "Więcej",
      clear: "Wyczyść",
      confirm: "Potwierdź",
      itemUnit: "Ilość"
    }
  },
  tableForm: {
    search: "Szukaj",
    reset: "Reset",
    submit: "Zatwierdź",
    collapsed: "Pokaż wiecej",
    expand: "Pokaż mniej",
    inputPlaceholder: "Proszę podać",
    selectPlaceholder: "Proszę wybrać"
  },
  alert: {
    clear: "Wyczyść",
    selected: "Wybrane",
    item: "Wpis"
  },
  pagination: {
    total: {
      range: " ",
      total: "z",
      item: "Wpisów"
    }
  },
  tableToolBar: {
    leftPin: "Przypnij do lewej",
    rightPin: "Przypnij do prawej",
    noPin: "Odepnij",
    leftFixedTitle: "Przypięte do lewej",
    rightFixedTitle: "Przypięte do prawej",
    noFixedTitle: "Nieprzypięte",
    reset: "Reset",
    columnDisplay: "Wyświetlane wiersze",
    columnSetting: "Ustawienia",
    fullScreen: "Pełen ekran",
    exitFullScreen: "Zamknij pełen ekran",
    reload: "Odśwież",
    density: "Odstęp",
    densityDefault: "Standard",
    densityLarger: "Wiekszy",
    densityMiddle: "Sredni",
    densitySmall: "Kompaktowy"
  },
  stepsForm: {
    next: "Weiter",
    prev: "Zurück",
    submit: "Abschließen"
  },
  loginForm: {
    submitText: "Zaloguj się"
  },
  editableTable: {
    action: {
      save: "Zapisać",
      cancel: "Anuluj",
      delete: "Usunąć",
      add: "dodawanie wiersza danych"
    }
  },
  switch: {
    open: "otwierać",
    close: "zamykać"
  }
}, Ni = {
  moneySymbol: "R$",
  form: {
    lightFilter: {
      more: "Mais",
      clear: "Limpar",
      confirm: "Confirmar",
      itemUnit: "Itens"
    }
  },
  tableForm: {
    search: "Filtrar",
    reset: "Limpar",
    submit: "Confirmar",
    collapsed: "Expandir",
    expand: "Colapsar",
    inputPlaceholder: "Por favor insira",
    selectPlaceholder: "Por favor selecione"
  },
  alert: {
    clear: "Limpar",
    selected: "Selecionado(s)",
    item: "Item(s)"
  },
  pagination: {
    total: {
      range: " ",
      total: "de",
      item: "itens"
    }
  },
  tableToolBar: {
    leftPin: "Fixar à esquerda",
    rightPin: "Fixar à direita",
    noPin: "Desfixado",
    leftFixedTitle: "Fixado à esquerda",
    rightFixedTitle: "Fixado à direita",
    noFixedTitle: "Não fixado",
    reset: "Limpar",
    columnDisplay: "Mostrar Coluna",
    columnSetting: "Configurações",
    fullScreen: "Tela Cheia",
    exitFullScreen: "Sair da Tela Cheia",
    reload: "Atualizar",
    density: "Densidade",
    densityDefault: "Padrão",
    densityLarger: "Largo",
    densityMiddle: "Médio",
    densitySmall: "Compacto"
  },
  stepsForm: {
    next: "Próximo",
    prev: "Anterior",
    submit: "Enviar"
  },
  loginForm: {
    submitText: "Entrar"
  },
  editableTable: {
    action: {
      save: "Salvar",
      cancel: "Cancelar",
      delete: "Apagar",
      add: "adicionar uma linha de dados"
    }
  },
  switch: {
    open: "abrir",
    close: "fechar"
  }
}, Wi = {
  moneySymbol: "₽",
  form: {
    lightFilter: {
      more: "Еще",
      clear: "Очистить",
      confirm: "ОК",
      itemUnit: "Позиции"
    }
  },
  tableForm: {
    search: "Найти",
    reset: "Сброс",
    submit: "Отправить",
    collapsed: "Развернуть",
    expand: "Свернуть",
    inputPlaceholder: "Введите значение",
    selectPlaceholder: "Выберите значение"
  },
  alert: {
    clear: "Очистить",
    selected: "Выбрано",
    item: "элементов"
  },
  pagination: {
    total: {
      range: " ",
      total: "из",
      item: "элементов"
    }
  },
  tableToolBar: {
    leftPin: "Закрепить слева",
    rightPin: "Закрепить справа",
    noPin: "Открепить",
    leftFixedTitle: "Закреплено слева",
    rightFixedTitle: "Закреплено справа",
    noFixedTitle: "Не закреплено",
    reset: "Сброс",
    columnDisplay: "Отображение столбца",
    columnSetting: "Настройки",
    fullScreen: "Полный экран",
    exitFullScreen: "Выйти из полноэкранного режима",
    reload: "Обновить",
    density: "Размер",
    densityDefault: "По умолчанию",
    densityLarger: "Большой",
    densityMiddle: "Средний",
    densitySmall: "Сжатый"
  },
  stepsForm: {
    next: "Следующий",
    prev: "Предыдущий",
    submit: "Завершить"
  },
  loginForm: {
    submitText: "Вход"
  },
  editableTable: {
    action: {
      save: "Сохранить",
      cancel: "Отменить",
      delete: "Удалить",
      add: "добавить ряд данных"
    }
  },
  switch: {
    open: "Открытый чемпионат мира по теннису",
    close: "По адресу:"
  }
}, Gi = {
  moneySymbol: "€",
  deleteThisLine: "Odstrániť tento riadok",
  copyThisLine: "Skopírujte tento riadok",
  form: {
    lightFilter: {
      more: "Viac",
      clear: "Vyčistiť",
      confirm: "Potvrďte",
      itemUnit: "Položky"
    }
  },
  tableForm: {
    search: "Vyhladať",
    reset: "Resetovať",
    submit: "Odoslať",
    collapsed: "Rozbaliť",
    expand: "Zbaliť",
    inputPlaceholder: "Prosím, zadajte",
    selectPlaceholder: "Prosím, vyberte"
  },
  alert: {
    clear: "Vyčistiť",
    selected: "Vybraný",
    item: "Položka"
  },
  pagination: {
    total: {
      range: " ",
      total: "z",
      item: "položiek"
    }
  },
  tableToolBar: {
    leftPin: "Pripnúť vľavo",
    rightPin: "Pripnúť vpravo",
    noPin: "Odopnuté",
    leftFixedTitle: "Fixované na ľavo",
    rightFixedTitle: "Fixované na pravo",
    noFixedTitle: "Nefixované",
    reset: "Resetovať",
    columnDisplay: "Zobrazenie stĺpcov",
    columnSetting: "Nastavenia",
    fullScreen: "Celá obrazovka",
    exitFullScreen: "Ukončiť celú obrazovku",
    reload: "Obnoviť",
    density: "Hustota",
    densityDefault: "Predvolené",
    densityLarger: "Väčšie",
    densityMiddle: "Stredné",
    densitySmall: "Kompaktné"
  },
  stepsForm: {
    next: "Ďalšie",
    prev: "Predchádzajúce",
    submit: "Potvrdiť"
  },
  loginForm: {
    submitText: "Prihlásiť sa"
  },
  editableTable: {
    onlyOneLineEditor: "Upravovať možno iba jeden riadok",
    action: {
      save: "Uložiť",
      cancel: "Zrušiť",
      delete: "Odstrániť",
      add: "pridať riadok údajov"
    }
  },
  switch: {
    open: "otvoriť",
    close: "zavrieť"
  }
}, Ui = {
  moneySymbol: "RSD",
  form: {
    lightFilter: {
      more: "Više",
      clear: "Očisti",
      confirm: "Potvrdi",
      itemUnit: "Stavke"
    }
  },
  tableForm: {
    search: "Pronađi",
    reset: "Resetuj",
    submit: "Pošalji",
    collapsed: "Proširi",
    expand: "Skupi",
    inputPlaceholder: "Molimo unesite",
    selectPlaceholder: "Molimo odaberite"
  },
  alert: {
    clear: "Očisti",
    selected: "Odabrano",
    item: "Stavka"
  },
  pagination: {
    total: {
      range: " ",
      total: "od",
      item: "stavki"
    }
  },
  tableToolBar: {
    leftPin: "Zakači levo",
    rightPin: "Zakači desno",
    noPin: "Nije zakačeno",
    leftFixedTitle: "Fiksirano levo",
    rightFixedTitle: "Fiksirano desno",
    noFixedTitle: "Nije fiksirano",
    reset: "Resetuj",
    columnDisplay: "Prikaz kolona",
    columnSetting: "Podešavanja",
    fullScreen: "Pun ekran",
    exitFullScreen: "Zatvori pun ekran",
    reload: "Osveži",
    density: "Veličina",
    densityDefault: "Podrazumevana",
    densityLarger: "Veća",
    densityMiddle: "Srednja",
    densitySmall: "Kompaktna"
  },
  stepsForm: {
    next: "Dalje",
    prev: "Nazad",
    submit: "Gotovo"
  },
  loginForm: {
    submitText: "Prijavi se"
  },
  editableTable: {
    action: {
      save: "Sačuvaj",
      cancel: "Poništi",
      delete: "Obriši",
      add: "dodajte red podataka"
    }
  },
  switch: {
    open: "Отворите",
    close: "Затворите"
  }
}, Xi = {
  moneySymbol: "฿",
  deleteThisLine: "ลบบรรทัดนี้",
  copyThisLine: "คัดลอกบรรทัดนี้",
  form: {
    lightFilter: {
      more: "มากกว่า",
      clear: "ชัดเจน",
      confirm: "ยืนยัน",
      itemUnit: "รายการ"
    }
  },
  tableForm: {
    search: "สอบถาม",
    reset: "รีเซ็ต",
    submit: "ส่ง",
    collapsed: "ขยาย",
    expand: "ทรุด",
    inputPlaceholder: "กรุณาป้อน",
    selectPlaceholder: "โปรดเลือก"
  },
  alert: {
    clear: "ชัดเจน",
    selected: "เลือกแล้ว",
    item: "รายการ"
  },
  pagination: {
    total: {
      range: " ",
      total: "ของ",
      item: "รายการ"
    }
  },
  tableToolBar: {
    leftPin: "ปักหมุดไปทางซ้าย",
    rightPin: "ปักหมุดไปทางขวา",
    noPin: "เลิกตรึงแล้ว",
    leftFixedTitle: "แก้ไขด้านซ้าย",
    rightFixedTitle: "แก้ไขด้านขวา",
    noFixedTitle: "ไม่คงที่",
    reset: "รีเซ็ต",
    columnDisplay: "การแสดงคอลัมน์",
    columnSetting: "การตั้งค่า",
    fullScreen: "เต็มจอ",
    exitFullScreen: "ออกจากโหมดเต็มหน้าจอ",
    reload: "รีเฟรช",
    density: "ความหนาแน่น",
    densityDefault: "ค่าเริ่มต้น",
    densityLarger: "ขนาดใหญ่ขึ้น",
    densityMiddle: "กลาง",
    densitySmall: "กะทัดรัด"
  },
  stepsForm: {
    next: "ถัดไป",
    prev: "ก่อนหน้า",
    submit: "เสร็จ"
  },
  loginForm: {
    submitText: "เข้าสู่ระบบ"
  },
  editableTable: {
    onlyOneLineEditor: "แก้ไขได้เพียงบรรทัดเดียวเท่านั้น",
    action: {
      save: "บันทึก",
      cancel: "ยกเลิก",
      delete: "ลบ",
      add: "เพิ่มแถวของข้อมูล"
    }
  },
  switch: {
    open: "เปิด",
    close: "ปิด"
  }
}, Ki = {
  moneySymbol: "₺",
  form: {
    lightFilter: {
      more: "Daha Fazla",
      clear: "Temizle",
      confirm: "Onayla",
      itemUnit: "Öğeler"
    }
  },
  tableForm: {
    search: "Filtrele",
    reset: "Sıfırla",
    submit: "Gönder",
    collapsed: "Daha fazla",
    expand: "Daha az",
    inputPlaceholder: "Filtrelemek için bir değer girin",
    selectPlaceholder: "Filtrelemek için bir değer seçin"
  },
  alert: {
    clear: "Temizle",
    selected: "Seçili",
    item: "Öğe"
  },
  pagination: {
    total: {
      range: " ",
      total: "Toplam",
      item: "Öğe"
    }
  },
  tableToolBar: {
    leftPin: "Sola sabitle",
    rightPin: "Sağa sabitle",
    noPin: "Sabitlemeyi kaldır",
    leftFixedTitle: "Sola sabitlendi",
    rightFixedTitle: "Sağa sabitlendi",
    noFixedTitle: "Sabitlenmedi",
    reset: "Sıfırla",
    columnDisplay: "Kolon Görünümü",
    columnSetting: "Ayarlar",
    fullScreen: "Tam Ekran",
    exitFullScreen: "Tam Ekrandan Çık",
    reload: "Yenile",
    density: "Kalınlık",
    densityDefault: "Varsayılan",
    densityLarger: "Büyük",
    densityMiddle: "Orta",
    densitySmall: "Küçük"
  },
  stepsForm: {
    next: "Sıradaki",
    prev: "Önceki",
    submit: "Gönder"
  },
  loginForm: {
    submitText: "Giriş Yap"
  },
  editableTable: {
    action: {
      save: "Kaydet",
      cancel: "Vazgeç",
      delete: "Sil",
      add: "foegje in rige gegevens ta"
    }
  },
  switch: {
    open: "açık",
    close: "kapatmak"
  }
}, Vi = {
  moneySymbol: "₴",
  deleteThisLine: "Видатили рядок",
  copyThisLine: "Скопіювати рядок",
  form: {
    lightFilter: {
      more: "Ще",
      clear: "Очистити",
      confirm: "Ок",
      itemUnit: "Позиції"
    }
  },
  tableForm: {
    search: "Пошук",
    reset: "Очистити",
    submit: "Відправити",
    collapsed: "Розгорнути",
    expand: "Згорнути",
    inputPlaceholder: "Введіть значення",
    selectPlaceholder: "Оберіть значення"
  },
  alert: {
    clear: "Очистити",
    selected: "Обрано",
    item: "елементів"
  },
  pagination: {
    total: {
      range: " ",
      total: "з",
      item: "елементів"
    }
  },
  tableToolBar: {
    leftPin: "Закріпити зліва",
    rightPin: "Закріпити справа",
    noPin: "Відкріпити",
    leftFixedTitle: "Закріплено зліва",
    rightFixedTitle: "Закріплено справа",
    noFixedTitle: "Не закріплено",
    reset: "Скинути",
    columnDisplay: "Відображення стовпців",
    columnSetting: "Налаштування",
    fullScreen: "Повноекранний режим",
    exitFullScreen: "Вийти з повноекранного режиму",
    reload: "Оновити",
    density: "Розмір",
    densityDefault: "За замовчуванням",
    densityLarger: "Великий",
    densityMiddle: "Середній",
    densitySmall: "Стислий"
  },
  stepsForm: {
    next: "Наступний",
    prev: "Попередній",
    submit: "Завершити"
  },
  loginForm: {
    submitText: "Вхіх"
  },
  editableTable: {
    onlyOneLineEditor: "Тільки один рядок може бути редагований одночасно",
    action: {
      save: "Зберегти",
      cancel: "Відмінити",
      delete: "Видалити",
      add: "додати рядок"
    }
  },
  switch: {
    open: "Відкрито",
    close: "Закрито"
  }
}, Zi = {
  moneySymbol: "₫",
  form: {
    lightFilter: {
      more: "Nhiều hơn",
      clear: "Trong",
      confirm: "Xác nhận",
      itemUnit: "Mục"
    }
  },
  tableForm: {
    search: "Tìm kiếm",
    reset: "Làm lại",
    submit: "Gửi đi",
    collapsed: "Mở rộng",
    expand: "Thu gọn",
    inputPlaceholder: "nhập dữ liệu",
    selectPlaceholder: "Vui lòng chọn"
  },
  alert: {
    clear: "Xóa",
    selected: "đã chọn",
    item: "mục"
  },
  pagination: {
    total: {
      range: " ",
      total: "trên",
      item: "mặt hàng"
    }
  },
  tableToolBar: {
    leftPin: "Ghim trái",
    rightPin: "Ghim phải",
    noPin: "Bỏ ghim",
    leftFixedTitle: "Cố định trái",
    rightFixedTitle: "Cố định phải",
    noFixedTitle: "Chưa cố định",
    reset: "Làm lại",
    columnDisplay: "Cột hiển thị",
    columnSetting: "Cấu hình",
    fullScreen: "Chế độ toàn màn hình",
    exitFullScreen: "Thoát chế độ toàn màn hình",
    reload: "Làm mới",
    density: "Mật độ hiển thị",
    densityDefault: "Mặc định",
    densityLarger: "Mặc định",
    densityMiddle: "Trung bình",
    densitySmall: "Chật"
  },
  stepsForm: {
    next: "Sau",
    prev: "Trước",
    submit: "Kết thúc"
  },
  loginForm: {
    submitText: "Đăng nhập"
  },
  editableTable: {
    action: {
      save: "Cứu",
      cancel: "Hủy",
      delete: "Xóa",
      add: "thêm một hàng dữ liệu"
    }
  },
  switch: {
    open: "mở",
    close: "đóng"
  }
}, qi = {
  moneySymbol: "¥",
  deleteThisLine: "删除此项",
  copyThisLine: "复制此项",
  form: {
    lightFilter: {
      more: "更多筛选",
      clear: "清除",
      confirm: "确认",
      itemUnit: "项"
    }
  },
  tableForm: {
    search: "查询",
    reset: "重置",
    submit: "提交",
    collapsed: "展开",
    expand: "收起",
    inputPlaceholder: "请输入",
    selectPlaceholder: "请选择"
  },
  alert: {
    clear: "取消选择",
    selected: "已选择",
    item: "项"
  },
  pagination: {
    total: {
      range: "第",
      total: "条/总共",
      item: "条"
    }
  },
  tableToolBar: {
    leftPin: "固定在列首",
    rightPin: "固定在列尾",
    noPin: "不固定",
    leftFixedTitle: "固定在左侧",
    rightFixedTitle: "固定在右侧",
    noFixedTitle: "不固定",
    reset: "重置",
    columnDisplay: "列展示",
    columnSetting: "列设置",
    fullScreen: "全屏",
    exitFullScreen: "退出全屏",
    reload: "刷新",
    density: "密度",
    densityDefault: "正常",
    densityLarger: "默认",
    densityMiddle: "中等",
    densitySmall: "紧凑"
  },
  stepsForm: {
    next: "下一步",
    prev: "上一步",
    submit: "提交"
  },
  loginForm: {
    submitText: "登录"
  },
  editableTable: {
    onlyOneLineEditor: "只能同时编辑一行",
    action: {
      save: "保存",
      cancel: "取消",
      delete: "删除",
      add: "添加一行数据"
    }
  },
  switch: {
    open: "打开",
    close: "关闭"
  }
}, Yi = {
  moneySymbol: "NT$",
  deleteThisLine: "刪除此项",
  copyThisLine: "複製此项",
  form: {
    lightFilter: {
      more: "更多篩選",
      clear: "清除",
      confirm: "確認",
      itemUnit: "項"
    }
  },
  tableForm: {
    search: "查詢",
    reset: "重置",
    submit: "提交",
    collapsed: "展開",
    expand: "收起",
    inputPlaceholder: "請輸入",
    selectPlaceholder: "請選擇"
  },
  alert: {
    clear: "取消選擇",
    selected: "已選擇",
    item: "項"
  },
  pagination: {
    total: {
      range: "第",
      total: "條/總共",
      item: "條"
    }
  },
  tableToolBar: {
    leftPin: "固定到左邊",
    rightPin: "固定到右邊",
    noPin: "不固定",
    leftFixedTitle: "固定在左側",
    rightFixedTitle: "固定在右側",
    noFixedTitle: "不固定",
    reset: "重置",
    columnDisplay: "列展示",
    columnSetting: "列設置",
    fullScreen: "全屏",
    exitFullScreen: "退出全屏",
    reload: "刷新",
    density: "密度",
    densityDefault: "正常",
    densityLarger: "默認",
    densityMiddle: "中等",
    densitySmall: "緊湊"
  },
  stepsForm: {
    next: "下一步",
    prev: "上一步",
    submit: "完成"
  },
  loginForm: {
    submitText: "登入"
  },
  editableTable: {
    onlyOneLineEditor: "只能同時編輯一行",
    action: {
      save: "保存",
      cancel: "取消",
      delete: "刪除",
      add: "新增一行資料"
    }
  },
  switch: {
    open: "打開",
    close: "關閉"
  }
};
function Qi(e, t) {
  var n = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (!n) {
    if (Array.isArray(e) || (n = Ji(e)) || t && e && typeof e.length == "number") {
      n && (e = n);
      var r = 0, a = function() {
      };
      return { s: a, n: function() {
        return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] };
      }, e: function(s) {
        throw s;
      }, f: a };
    }
    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
  }
  var i = !0, o = !1, l;
  return { s: function() {
    n = n.call(e);
  }, n: function() {
    var s = n.next();
    return i = s.done, s;
  }, e: function(s) {
    o = !0, l = s;
  }, f: function() {
    try {
      !i && n.return != null && n.return();
    } finally {
      if (o)
        throw l;
    }
  } };
}
function Ji(e, t) {
  if (e) {
    if (typeof e == "string")
      return Yn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Yn(e, t);
  }
}
function Yn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function eo(e, t, n) {
  var r = t.replace(/\[(\d+)\]/g, ".$1").split("."), a = e, i = n, o = Qi(r), l;
  try {
    for (o.s(); !(l = o.n()).done; ) {
      var u = l.value;
      if (i = Object(a)[u], a = Object(a)[u], i === void 0)
        return n;
    }
  } catch (s) {
    o.e(s);
  } finally {
    o.f();
  }
  return i;
}
var N = function(t, n) {
  return {
    getMessage: function(a, i) {
      return eo(n, a, i) || i;
    },
    locale: t
  };
}, to = N("mn_MN", Di), no = N("ar_EG", Pi), In = N("zh_CN", qi), ro = N("en_US", Ii), ao = N("en_GB", Mi), io = N("vi_VN", Zi), oo = N("it_IT", Ri), lo = N("ja_JP", Li), uo = N("es_ES", Fi), co = N("ca_ES", wi), so = N("ru_RU", Wi), fo = N("sr_RS", Ui), po = N("ms_MY", _i), mo = N("zh_TW", Yi), ho = N("fr_FR", Bi), go = N("pt_BR", Ni), vo = N("ko_KR", Hi), yo = N("id_ID", Ei), bo = N("de_DE", Oi), So = N("fa_IR", ji), xo = N("tr_TR", Ki), Co = N("pl_PL", zi), To = N("hr_", ki), Po = N("th_TH", Xi), wo = N("cs_cz", $i), $o = N("sk_SK", Gi), Oo = N("he_IL", Ai), Mo = N("uk_UA", Vi), Zr = {
  "mn-MN": to,
  "ar-EG": no,
  "zh-CN": In,
  "en-US": ro,
  "en-GB": ao,
  "vi-VN": io,
  "it-IT": oo,
  "ja-JP": lo,
  "es-ES": uo,
  "ca-ES": co,
  "ru-RU": so,
  "sr-RS": fo,
  "ms-MY": po,
  "zh-TW": mo,
  "fr-FR": ho,
  "pt-BR": go,
  "ko-KR": vo,
  "id-ID": yo,
  "de-DE": bo,
  "fa-IR": So,
  "tr-TR": xo,
  "pl-PL": Co,
  "hr-HR": To,
  "th-TH": Po,
  "cs-CZ": wo,
  "sk-SK": $o,
  "he-IL": Oo,
  "uk-UA": Mo
}, Io = Object.keys(Zr), Fo = function(t) {
  var n = (t || "zh-CN").toLocaleLowerCase();
  return Io.find(function(r) {
    var a = r.toLocaleLowerCase();
    return a.includes(n);
  });
};
function at(e) {
  "@babel/helpers - typeof";
  return at = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, at(e);
}
function Qn(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Jn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Qn(Object(n), !0).forEach(function(r) {
      jo(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Qn(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function jo(e, t, n) {
  return t = Bo(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Bo(e) {
  var t = Ao(e, "string");
  return at(t) == "symbol" ? t : String(t);
}
function Ao(e, t) {
  if (at(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (at(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var ko = {
  getPrefixCls: function() {
    return "";
  },
  intl: m(function() {
    return Jn(Jn({}, In), {}, {
      locale: "default"
    });
  }),
  theme: m(function() {
    return {
      type: "light",
      hashed: !0
    };
  }),
  direction: m(function() {
    return "ltr";
  }),
  componentSize: m(function() {
    return "middle";
  })
}, qr = Symbol();
function Eo(e) {
  return pt(qr, e);
}
function Y() {
  return Fe(qr, ko);
}
var Ro = typeof global == "object" && global && global.Object === Object && global, Lo = typeof self == "object" && self && self.Object === Object && self, Ho = Ro || Lo || Function("return this")(), kt = Ho.Symbol, Yr = Object.prototype, Do = Yr.hasOwnProperty, _o = Yr.toString, qe = kt ? kt.toStringTag : void 0;
function zo(e) {
  var t = Do.call(e, qe), n = e[qe];
  try {
    e[qe] = void 0;
    var r = !0;
  } catch {
  }
  var a = _o.call(e);
  return r && (t ? e[qe] = n : delete e[qe]), a;
}
var No = Object.prototype, Wo = No.toString;
function Go(e) {
  return Wo.call(e);
}
var Uo = "[object Null]", Xo = "[object Undefined]", er = kt ? kt.toStringTag : void 0;
function Ko(e) {
  return e == null ? e === void 0 ? Xo : Uo : er && er in Object(e) ? zo(e) : Go(e);
}
function Vo(e) {
  return e != null && typeof e == "object";
}
var Qr = Array.isArray;
function Zo(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var qo = "[object String]";
function Yo(e) {
  return typeof e == "string" || !Qr(e) && Vo(e) && Ko(e) == qo;
}
function Jr(e) {
  return Array.isArray(e) ? e : [e];
}
function Ee(e) {
  var t = {};
  if (Object.keys(e || {}).forEach(function(n) {
    e[n] !== void 0 && (t[n] = e[n]);
  }), !(Object.keys(t).length < 1))
    return t;
}
function Qo(e) {
  return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(e);
}
function ea(e) {
  if (!e)
    return !1;
  var t = /^http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- ./?%&=]*)?/;
  if (!t.test(e))
    return !1;
  try {
    var n = new URL(e);
    return !!n;
  } catch {
    return !1;
  }
}
var Jo = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {}, el = { exports: {} };
(function(e, t) {
  (function(n, r) {
    e.exports = r();
  })(Jo, function() {
    var n = 1e3, r = 6e4, a = 36e5, i = "millisecond", o = "second", l = "minute", u = "hour", s = "day", d = "week", f = "month", h = "quarter", p = "year", g = "date", v = "Invalid Date", y = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, $ = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, C = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(P) {
      var S = ["th", "st", "nd", "rd"], x = P % 100;
      return "[" + P + (S[(x - 20) % 10] || S[x] || S[0]) + "]";
    } }, j = function(P, S, x) {
      var M = String(P);
      return !M || M.length >= S ? P : "" + Array(S + 1 - M.length).join(x) + P;
    }, B = { s: j, z: function(P) {
      var S = -P.utcOffset(), x = Math.abs(S), M = Math.floor(x / 60), w = x % 60;
      return (S <= 0 ? "+" : "-") + j(M, 2, "0") + ":" + j(w, 2, "0");
    }, m: function P(S, x) {
      if (S.date() < x.date())
        return -P(x, S);
      var M = 12 * (x.year() - S.year()) + (x.month() - S.month()), w = S.clone().add(M, f), k = x - w < 0, R = S.clone().add(M + (k ? -1 : 1), f);
      return +(-(M + (x - w) / (k ? w - R : R - w)) || 0);
    }, a: function(P) {
      return P < 0 ? Math.ceil(P) || 0 : Math.floor(P);
    }, p: function(P) {
      return { M: f, y: p, w: d, d: s, D: g, h: u, m: l, s: o, ms: i, Q: h }[P] || String(P || "").toLowerCase().replace(/s$/, "");
    }, u: function(P) {
      return P === void 0;
    } }, I = "en", O = {};
    O[I] = C;
    var T = "$isDayjsObject", E = function(P) {
      return P instanceof G || !(!P || !P[T]);
    }, L = function P(S, x, M) {
      var w;
      if (!S)
        return I;
      if (typeof S == "string") {
        var k = S.toLowerCase();
        O[k] && (w = k), x && (O[k] = x, w = k);
        var R = S.split("-");
        if (!w && R.length > 1)
          return P(R[0]);
      } else {
        var D = S.name;
        O[D] = S, w = D;
      }
      return !M && w && (I = w), w || !M && I;
    }, b = function(P, S) {
      if (E(P))
        return P.clone();
      var x = typeof S == "object" ? S : {};
      return x.date = P, x.args = arguments, new G(x);
    }, A = B;
    A.l = L, A.i = E, A.w = function(P, S) {
      return b(P, { locale: S.$L, utc: S.$u, x: S.$x, $offset: S.$offset });
    };
    var G = function() {
      function P(x) {
        this.$L = L(x.locale, null, !0), this.parse(x), this.$x = this.$x || x.x || {}, this[T] = !0;
      }
      var S = P.prototype;
      return S.parse = function(x) {
        this.$d = function(M) {
          var w = M.date, k = M.utc;
          if (w === null)
            return /* @__PURE__ */ new Date(NaN);
          if (A.u(w))
            return /* @__PURE__ */ new Date();
          if (w instanceof Date)
            return new Date(w);
          if (typeof w == "string" && !/Z$/i.test(w)) {
            var R = w.match(y);
            if (R) {
              var D = R[2] - 1 || 0, z = (R[7] || "0").substring(0, 3);
              return k ? new Date(Date.UTC(R[1], D, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, z)) : new Date(R[1], D, R[3] || 1, R[4] || 0, R[5] || 0, R[6] || 0, z);
            }
          }
          return new Date(w);
        }(x), this.init();
      }, S.init = function() {
        var x = this.$d;
        this.$y = x.getFullYear(), this.$M = x.getMonth(), this.$D = x.getDate(), this.$W = x.getDay(), this.$H = x.getHours(), this.$m = x.getMinutes(), this.$s = x.getSeconds(), this.$ms = x.getMilliseconds();
      }, S.$utils = function() {
        return A;
      }, S.isValid = function() {
        return this.$d.toString() !== v;
      }, S.isSame = function(x, M) {
        var w = b(x);
        return this.startOf(M) <= w && w <= this.endOf(M);
      }, S.isAfter = function(x, M) {
        return b(x) < this.startOf(M);
      }, S.isBefore = function(x, M) {
        return this.endOf(M) < b(x);
      }, S.$g = function(x, M, w) {
        return A.u(x) ? this[M] : this.set(w, x);
      }, S.unix = function() {
        return Math.floor(this.valueOf() / 1e3);
      }, S.valueOf = function() {
        return this.$d.getTime();
      }, S.startOf = function(x, M) {
        var w = this, k = !!A.u(M) || M, R = A.p(x), D = function(Ce, te) {
          var he = A.w(w.$u ? Date.UTC(w.$y, te, Ce) : new Date(w.$y, te, Ce), w);
          return k ? he : he.endOf(s);
        }, z = function(Ce, te) {
          return A.w(w.toDate()[Ce].apply(w.toDate("s"), (k ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(te)), w);
        }, X = this.$W, W = this.$M, J = this.$D, Be = "set" + (this.$u ? "UTC" : "");
        switch (R) {
          case p:
            return k ? D(1, 0) : D(31, 11);
          case f:
            return k ? D(1, W) : D(0, W + 1);
          case d:
            var xe = this.$locale().weekStart || 0, Ve = (X < xe ? X + 7 : X) - xe;
            return D(k ? J - Ve : J + (6 - Ve), W);
          case s:
          case g:
            return z(Be + "Hours", 0);
          case u:
            return z(Be + "Minutes", 1);
          case l:
            return z(Be + "Seconds", 2);
          case o:
            return z(Be + "Milliseconds", 3);
          default:
            return this.clone();
        }
      }, S.endOf = function(x) {
        return this.startOf(x, !1);
      }, S.$set = function(x, M) {
        var w, k = A.p(x), R = "set" + (this.$u ? "UTC" : ""), D = (w = {}, w[s] = R + "Date", w[g] = R + "Date", w[f] = R + "Month", w[p] = R + "FullYear", w[u] = R + "Hours", w[l] = R + "Minutes", w[o] = R + "Seconds", w[i] = R + "Milliseconds", w)[k], z = k === s ? this.$D + (M - this.$W) : M;
        if (k === f || k === p) {
          var X = this.clone().set(g, 1);
          X.$d[D](z), X.init(), this.$d = X.set(g, Math.min(this.$D, X.daysInMonth())).$d;
        } else
          D && this.$d[D](z);
        return this.init(), this;
      }, S.set = function(x, M) {
        return this.clone().$set(x, M);
      }, S.get = function(x) {
        return this[A.p(x)]();
      }, S.add = function(x, M) {
        var w, k = this;
        x = Number(x);
        var R = A.p(M), D = function(W) {
          var J = b(k);
          return A.w(J.date(J.date() + Math.round(W * x)), k);
        };
        if (R === f)
          return this.set(f, this.$M + x);
        if (R === p)
          return this.set(p, this.$y + x);
        if (R === s)
          return D(1);
        if (R === d)
          return D(7);
        var z = (w = {}, w[l] = r, w[u] = a, w[o] = n, w)[R] || 1, X = this.$d.getTime() + x * z;
        return A.w(X, this);
      }, S.subtract = function(x, M) {
        return this.add(-1 * x, M);
      }, S.format = function(x) {
        var M = this, w = this.$locale();
        if (!this.isValid())
          return w.invalidDate || v;
        var k = x || "YYYY-MM-DDTHH:mm:ssZ", R = A.z(this), D = this.$H, z = this.$m, X = this.$M, W = w.weekdays, J = w.months, Be = w.meridiem, xe = function(te, he, Ze, vt) {
          return te && (te[he] || te(M, k)) || Ze[he].slice(0, vt);
        }, Ve = function(te) {
          return A.s(D % 12 || 12, te, "0");
        }, Ce = Be || function(te, he, Ze) {
          var vt = te < 12 ? "AM" : "PM";
          return Ze ? vt.toLowerCase() : vt;
        };
        return k.replace($, function(te, he) {
          return he || function(Ze) {
            switch (Ze) {
              case "YY":
                return String(M.$y).slice(-2);
              case "YYYY":
                return A.s(M.$y, 4, "0");
              case "M":
                return X + 1;
              case "MM":
                return A.s(X + 1, 2, "0");
              case "MMM":
                return xe(w.monthsShort, X, J, 3);
              case "MMMM":
                return xe(J, X);
              case "D":
                return M.$D;
              case "DD":
                return A.s(M.$D, 2, "0");
              case "d":
                return String(M.$W);
              case "dd":
                return xe(w.weekdaysMin, M.$W, W, 2);
              case "ddd":
                return xe(w.weekdaysShort, M.$W, W, 3);
              case "dddd":
                return W[M.$W];
              case "H":
                return String(D);
              case "HH":
                return A.s(D, 2, "0");
              case "h":
                return Ve(1);
              case "hh":
                return Ve(2);
              case "a":
                return Ce(D, z, !0);
              case "A":
                return Ce(D, z, !1);
              case "m":
                return String(z);
              case "mm":
                return A.s(z, 2, "0");
              case "s":
                return String(M.$s);
              case "ss":
                return A.s(M.$s, 2, "0");
              case "SSS":
                return A.s(M.$ms, 3, "0");
              case "Z":
                return R;
            }
            return null;
          }(te) || R.replace(":", "");
        });
      }, S.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
      }, S.diff = function(x, M, w) {
        var k, R = this, D = A.p(M), z = b(x), X = (z.utcOffset() - this.utcOffset()) * r, W = this - z, J = function() {
          return A.m(R, z);
        };
        switch (D) {
          case p:
            k = J() / 12;
            break;
          case f:
            k = J();
            break;
          case h:
            k = J() / 3;
            break;
          case d:
            k = (W - X) / 6048e5;
            break;
          case s:
            k = (W - X) / 864e5;
            break;
          case u:
            k = W / a;
            break;
          case l:
            k = W / r;
            break;
          case o:
            k = W / n;
            break;
          default:
            k = W;
        }
        return w ? k : A.a(k);
      }, S.daysInMonth = function() {
        return this.endOf(f).$D;
      }, S.$locale = function() {
        return O[this.$L];
      }, S.locale = function(x, M) {
        if (!x)
          return this.$L;
        var w = this.clone(), k = L(x, M, !0);
        return k && (w.$L = k), w;
      }, S.clone = function() {
        return A.w(this.$d, this);
      }, S.toDate = function() {
        return new Date(this.valueOf());
      }, S.toJSON = function() {
        return this.isValid() ? this.toISOString() : null;
      }, S.toISOString = function() {
        return this.$d.toISOString();
      }, S.toString = function() {
        return this.$d.toUTCString();
      }, P;
    }(), V = G.prototype;
    return b.prototype = V, [["$ms", i], ["$s", o], ["$m", l], ["$H", u], ["$W", s], ["$M", f], ["$y", p], ["$D", g]].forEach(function(P) {
      V[P[1]] = function(S) {
        return this.$g(S, P[0], P[1]);
      };
    }), b.extend = function(P, S) {
      return P.$i || (P(S, G, b), P.$i = !0), b;
    }, b.locale = L, b.isDayjs = E, b.unix = function(P) {
      return b(1e3 * P);
    }, b.en = O[I], b.Ls = O, b.p = {}, b;
  });
})(el);
function q(e, t) {
  tl(e) && (e = "100%");
  var n = nl(e);
  return e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e))), n && (e = parseInt(String(e * t), 10) / 100), Math.abs(e - t) < 1e-6 ? 1 : (t === 360 ? e = (e < 0 ? e % t + t : e % t) / parseFloat(String(t)) : e = e % t / parseFloat(String(t)), e);
}
function yt(e) {
  return Math.min(1, Math.max(0, e));
}
function tl(e) {
  return typeof e == "string" && e.indexOf(".") !== -1 && parseFloat(e) === 1;
}
function nl(e) {
  return typeof e == "string" && e.indexOf("%") !== -1;
}
function ta(e) {
  return e = parseFloat(e), (isNaN(e) || e < 0 || e > 1) && (e = 1), e;
}
function bt(e) {
  return e <= 1 ? "".concat(Number(e) * 100, "%") : e;
}
function we(e) {
  return e.length === 1 ? "0" + e : String(e);
}
function rl(e, t, n) {
  return {
    r: q(e, 255) * 255,
    g: q(t, 255) * 255,
    b: q(n, 255) * 255
  };
}
function tr(e, t, n) {
  e = q(e, 255), t = q(t, 255), n = q(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), i = 0, o = 0, l = (r + a) / 2;
  if (r === a)
    o = 0, i = 0;
  else {
    var u = r - a;
    switch (o = l > 0.5 ? u / (2 - r - a) : u / (r + a), r) {
      case e:
        i = (t - n) / u + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / u + 2;
        break;
      case n:
        i = (e - t) / u + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: o, l };
}
function Zt(e, t, n) {
  return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? e + (t - e) * (6 * n) : n < 1 / 2 ? t : n < 2 / 3 ? e + (t - e) * (2 / 3 - n) * 6 : e;
}
function al(e, t, n) {
  var r, a, i;
  if (e = q(e, 360), t = q(t, 100), n = q(n, 100), t === 0)
    a = n, i = n, r = n;
  else {
    var o = n < 0.5 ? n * (1 + t) : n + t - n * t, l = 2 * n - o;
    r = Zt(l, o, e + 1 / 3), a = Zt(l, o, e), i = Zt(l, o, e - 1 / 3);
  }
  return { r: r * 255, g: a * 255, b: i * 255 };
}
function fn(e, t, n) {
  e = q(e, 255), t = q(t, 255), n = q(n, 255);
  var r = Math.max(e, t, n), a = Math.min(e, t, n), i = 0, o = r, l = r - a, u = r === 0 ? 0 : l / r;
  if (r === a)
    i = 0;
  else {
    switch (r) {
      case e:
        i = (t - n) / l + (t < n ? 6 : 0);
        break;
      case t:
        i = (n - e) / l + 2;
        break;
      case n:
        i = (e - t) / l + 4;
        break;
    }
    i /= 6;
  }
  return { h: i, s: u, v: o };
}
function il(e, t, n) {
  e = q(e, 360) * 6, t = q(t, 100), n = q(n, 100);
  var r = Math.floor(e), a = e - r, i = n * (1 - t), o = n * (1 - a * t), l = n * (1 - (1 - a) * t), u = r % 6, s = [n, o, i, i, l, n][u], d = [l, n, n, o, i, i][u], f = [i, i, l, n, n, o][u];
  return { r: s * 255, g: d * 255, b: f * 255 };
}
function pn(e, t, n, r) {
  var a = [
    we(Math.round(e).toString(16)),
    we(Math.round(t).toString(16)),
    we(Math.round(n).toString(16))
  ];
  return r && a[0].startsWith(a[0].charAt(1)) && a[1].startsWith(a[1].charAt(1)) && a[2].startsWith(a[2].charAt(1)) ? a[0].charAt(0) + a[1].charAt(0) + a[2].charAt(0) : a.join("");
}
function ol(e, t, n, r, a) {
  var i = [
    we(Math.round(e).toString(16)),
    we(Math.round(t).toString(16)),
    we(Math.round(n).toString(16)),
    we(ll(r))
  ];
  return a && i[0].startsWith(i[0].charAt(1)) && i[1].startsWith(i[1].charAt(1)) && i[2].startsWith(i[2].charAt(1)) && i[3].startsWith(i[3].charAt(1)) ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0) + i[3].charAt(0) : i.join("");
}
function ll(e) {
  return Math.round(parseFloat(e) * 255).toString(16);
}
function nr(e) {
  return re(e) / 255;
}
function re(e) {
  return parseInt(e, 16);
}
function ul(e) {
  return {
    r: e >> 16,
    g: (e & 65280) >> 8,
    b: e & 255
  };
}
var mn = {
  aliceblue: "#f0f8ff",
  antiquewhite: "#faebd7",
  aqua: "#00ffff",
  aquamarine: "#7fffd4",
  azure: "#f0ffff",
  beige: "#f5f5dc",
  bisque: "#ffe4c4",
  black: "#000000",
  blanchedalmond: "#ffebcd",
  blue: "#0000ff",
  blueviolet: "#8a2be2",
  brown: "#a52a2a",
  burlywood: "#deb887",
  cadetblue: "#5f9ea0",
  chartreuse: "#7fff00",
  chocolate: "#d2691e",
  coral: "#ff7f50",
  cornflowerblue: "#6495ed",
  cornsilk: "#fff8dc",
  crimson: "#dc143c",
  cyan: "#00ffff",
  darkblue: "#00008b",
  darkcyan: "#008b8b",
  darkgoldenrod: "#b8860b",
  darkgray: "#a9a9a9",
  darkgreen: "#006400",
  darkgrey: "#a9a9a9",
  darkkhaki: "#bdb76b",
  darkmagenta: "#8b008b",
  darkolivegreen: "#556b2f",
  darkorange: "#ff8c00",
  darkorchid: "#9932cc",
  darkred: "#8b0000",
  darksalmon: "#e9967a",
  darkseagreen: "#8fbc8f",
  darkslateblue: "#483d8b",
  darkslategray: "#2f4f4f",
  darkslategrey: "#2f4f4f",
  darkturquoise: "#00ced1",
  darkviolet: "#9400d3",
  deeppink: "#ff1493",
  deepskyblue: "#00bfff",
  dimgray: "#696969",
  dimgrey: "#696969",
  dodgerblue: "#1e90ff",
  firebrick: "#b22222",
  floralwhite: "#fffaf0",
  forestgreen: "#228b22",
  fuchsia: "#ff00ff",
  gainsboro: "#dcdcdc",
  ghostwhite: "#f8f8ff",
  goldenrod: "#daa520",
  gold: "#ffd700",
  gray: "#808080",
  green: "#008000",
  greenyellow: "#adff2f",
  grey: "#808080",
  honeydew: "#f0fff0",
  hotpink: "#ff69b4",
  indianred: "#cd5c5c",
  indigo: "#4b0082",
  ivory: "#fffff0",
  khaki: "#f0e68c",
  lavenderblush: "#fff0f5",
  lavender: "#e6e6fa",
  lawngreen: "#7cfc00",
  lemonchiffon: "#fffacd",
  lightblue: "#add8e6",
  lightcoral: "#f08080",
  lightcyan: "#e0ffff",
  lightgoldenrodyellow: "#fafad2",
  lightgray: "#d3d3d3",
  lightgreen: "#90ee90",
  lightgrey: "#d3d3d3",
  lightpink: "#ffb6c1",
  lightsalmon: "#ffa07a",
  lightseagreen: "#20b2aa",
  lightskyblue: "#87cefa",
  lightslategray: "#778899",
  lightslategrey: "#778899",
  lightsteelblue: "#b0c4de",
  lightyellow: "#ffffe0",
  lime: "#00ff00",
  limegreen: "#32cd32",
  linen: "#faf0e6",
  magenta: "#ff00ff",
  maroon: "#800000",
  mediumaquamarine: "#66cdaa",
  mediumblue: "#0000cd",
  mediumorchid: "#ba55d3",
  mediumpurple: "#9370db",
  mediumseagreen: "#3cb371",
  mediumslateblue: "#7b68ee",
  mediumspringgreen: "#00fa9a",
  mediumturquoise: "#48d1cc",
  mediumvioletred: "#c71585",
  midnightblue: "#191970",
  mintcream: "#f5fffa",
  mistyrose: "#ffe4e1",
  moccasin: "#ffe4b5",
  navajowhite: "#ffdead",
  navy: "#000080",
  oldlace: "#fdf5e6",
  olive: "#808000",
  olivedrab: "#6b8e23",
  orange: "#ffa500",
  orangered: "#ff4500",
  orchid: "#da70d6",
  palegoldenrod: "#eee8aa",
  palegreen: "#98fb98",
  paleturquoise: "#afeeee",
  palevioletred: "#db7093",
  papayawhip: "#ffefd5",
  peachpuff: "#ffdab9",
  peru: "#cd853f",
  pink: "#ffc0cb",
  plum: "#dda0dd",
  powderblue: "#b0e0e6",
  purple: "#800080",
  rebeccapurple: "#663399",
  red: "#ff0000",
  rosybrown: "#bc8f8f",
  royalblue: "#4169e1",
  saddlebrown: "#8b4513",
  salmon: "#fa8072",
  sandybrown: "#f4a460",
  seagreen: "#2e8b57",
  seashell: "#fff5ee",
  sienna: "#a0522d",
  silver: "#c0c0c0",
  skyblue: "#87ceeb",
  slateblue: "#6a5acd",
  slategray: "#708090",
  slategrey: "#708090",
  snow: "#fffafa",
  springgreen: "#00ff7f",
  steelblue: "#4682b4",
  tan: "#d2b48c",
  teal: "#008080",
  thistle: "#d8bfd8",
  tomato: "#ff6347",
  turquoise: "#40e0d0",
  violet: "#ee82ee",
  wheat: "#f5deb3",
  white: "#ffffff",
  whitesmoke: "#f5f5f5",
  yellow: "#ffff00",
  yellowgreen: "#9acd32"
};
function Re(e) {
  var t = { r: 0, g: 0, b: 0 }, n = 1, r = null, a = null, i = null, o = !1, l = !1;
  return typeof e == "string" && (e = dl(e)), typeof e == "object" && (fe(e.r) && fe(e.g) && fe(e.b) ? (t = rl(e.r, e.g, e.b), o = !0, l = String(e.r).substr(-1) === "%" ? "prgb" : "rgb") : fe(e.h) && fe(e.s) && fe(e.v) ? (r = bt(e.s), a = bt(e.v), t = il(e.h, r, a), o = !0, l = "hsv") : fe(e.h) && fe(e.s) && fe(e.l) && (r = bt(e.s), i = bt(e.l), t = al(e.h, r, i), o = !0, l = "hsl"), Object.prototype.hasOwnProperty.call(e, "a") && (n = e.a)), n = ta(n), {
    ok: o,
    format: e.format || l,
    r: Math.min(255, Math.max(t.r, 0)),
    g: Math.min(255, Math.max(t.g, 0)),
    b: Math.min(255, Math.max(t.b, 0)),
    a: n
  };
}
var cl = "[-\\+]?\\d+%?", sl = "[-\\+]?\\d*\\.\\d+%?", ye = "(?:".concat(sl, ")|(?:").concat(cl, ")"), qt = "[\\s|\\(]+(".concat(ye, ")[,|\\s]+(").concat(ye, ")[,|\\s]+(").concat(ye, ")\\s*\\)?"), Yt = "[\\s|\\(]+(".concat(ye, ")[,|\\s]+(").concat(ye, ")[,|\\s]+(").concat(ye, ")[,|\\s]+(").concat(ye, ")\\s*\\)?"), le = {
  CSS_UNIT: new RegExp(ye),
  rgb: new RegExp("rgb" + qt),
  rgba: new RegExp("rgba" + Yt),
  hsl: new RegExp("hsl" + qt),
  hsla: new RegExp("hsla" + Yt),
  hsv: new RegExp("hsv" + qt),
  hsva: new RegExp("hsva" + Yt),
  hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
  hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
};
function dl(e) {
  if (e = e.trim().toLowerCase(), e.length === 0)
    return !1;
  var t = !1;
  if (mn[e])
    e = mn[e], t = !0;
  else if (e === "transparent")
    return { r: 0, g: 0, b: 0, a: 0, format: "name" };
  var n = le.rgb.exec(e);
  return n ? { r: n[1], g: n[2], b: n[3] } : (n = le.rgba.exec(e), n ? { r: n[1], g: n[2], b: n[3], a: n[4] } : (n = le.hsl.exec(e), n ? { h: n[1], s: n[2], l: n[3] } : (n = le.hsla.exec(e), n ? { h: n[1], s: n[2], l: n[3], a: n[4] } : (n = le.hsv.exec(e), n ? { h: n[1], s: n[2], v: n[3] } : (n = le.hsva.exec(e), n ? { h: n[1], s: n[2], v: n[3], a: n[4] } : (n = le.hex8.exec(e), n ? {
    r: re(n[1]),
    g: re(n[2]),
    b: re(n[3]),
    a: nr(n[4]),
    format: t ? "name" : "hex8"
  } : (n = le.hex6.exec(e), n ? {
    r: re(n[1]),
    g: re(n[2]),
    b: re(n[3]),
    format: t ? "name" : "hex"
  } : (n = le.hex4.exec(e), n ? {
    r: re(n[1] + n[1]),
    g: re(n[2] + n[2]),
    b: re(n[3] + n[3]),
    a: nr(n[4] + n[4]),
    format: t ? "name" : "hex8"
  } : (n = le.hex3.exec(e), n ? {
    r: re(n[1] + n[1]),
    g: re(n[2] + n[2]),
    b: re(n[3] + n[3]),
    format: t ? "name" : "hex"
  } : !1)))))))));
}
function fe(e) {
  return !!le.CSS_UNIT.exec(String(e));
}
var ae = (
  /** @class */
  function() {
    function e(t, n) {
      t === void 0 && (t = ""), n === void 0 && (n = {});
      var r;
      if (t instanceof e)
        return t;
      typeof t == "number" && (t = ul(t)), this.originalInput = t;
      var a = Re(t);
      this.originalInput = t, this.r = a.r, this.g = a.g, this.b = a.b, this.a = a.a, this.roundA = Math.round(100 * this.a) / 100, this.format = (r = n.format) !== null && r !== void 0 ? r : a.format, this.gradientType = n.gradientType, this.r < 1 && (this.r = Math.round(this.r)), this.g < 1 && (this.g = Math.round(this.g)), this.b < 1 && (this.b = Math.round(this.b)), this.isValid = a.ok;
    }
    return e.prototype.isDark = function() {
      return this.getBrightness() < 128;
    }, e.prototype.isLight = function() {
      return !this.isDark();
    }, e.prototype.getBrightness = function() {
      var t = this.toRgb();
      return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3;
    }, e.prototype.getLuminance = function() {
      var t = this.toRgb(), n, r, a, i = t.r / 255, o = t.g / 255, l = t.b / 255;
      return i <= 0.03928 ? n = i / 12.92 : n = Math.pow((i + 0.055) / 1.055, 2.4), o <= 0.03928 ? r = o / 12.92 : r = Math.pow((o + 0.055) / 1.055, 2.4), l <= 0.03928 ? a = l / 12.92 : a = Math.pow((l + 0.055) / 1.055, 2.4), 0.2126 * n + 0.7152 * r + 0.0722 * a;
    }, e.prototype.getAlpha = function() {
      return this.a;
    }, e.prototype.setAlpha = function(t) {
      return this.a = ta(t), this.roundA = Math.round(100 * this.a) / 100, this;
    }, e.prototype.isMonochrome = function() {
      var t = this.toHsl().s;
      return t === 0;
    }, e.prototype.toHsv = function() {
      var t = fn(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, v: t.v, a: this.a };
    }, e.prototype.toHsvString = function() {
      var t = fn(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.v * 100);
      return this.a === 1 ? "hsv(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsva(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHsl = function() {
      var t = tr(this.r, this.g, this.b);
      return { h: t.h * 360, s: t.s, l: t.l, a: this.a };
    }, e.prototype.toHslString = function() {
      var t = tr(this.r, this.g, this.b), n = Math.round(t.h * 360), r = Math.round(t.s * 100), a = Math.round(t.l * 100);
      return this.a === 1 ? "hsl(".concat(n, ", ").concat(r, "%, ").concat(a, "%)") : "hsla(".concat(n, ", ").concat(r, "%, ").concat(a, "%, ").concat(this.roundA, ")");
    }, e.prototype.toHex = function(t) {
      return t === void 0 && (t = !1), pn(this.r, this.g, this.b, t);
    }, e.prototype.toHexString = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex(t);
    }, e.prototype.toHex8 = function(t) {
      return t === void 0 && (t = !1), ol(this.r, this.g, this.b, this.a, t);
    }, e.prototype.toHex8String = function(t) {
      return t === void 0 && (t = !1), "#" + this.toHex8(t);
    }, e.prototype.toHexShortString = function(t) {
      return t === void 0 && (t = !1), this.a === 1 ? this.toHexString(t) : this.toHex8String(t);
    }, e.prototype.toRgb = function() {
      return {
        r: Math.round(this.r),
        g: Math.round(this.g),
        b: Math.round(this.b),
        a: this.a
      };
    }, e.prototype.toRgbString = function() {
      var t = Math.round(this.r), n = Math.round(this.g), r = Math.round(this.b);
      return this.a === 1 ? "rgb(".concat(t, ", ").concat(n, ", ").concat(r, ")") : "rgba(".concat(t, ", ").concat(n, ", ").concat(r, ", ").concat(this.roundA, ")");
    }, e.prototype.toPercentageRgb = function() {
      var t = function(n) {
        return "".concat(Math.round(q(n, 255) * 100), "%");
      };
      return {
        r: t(this.r),
        g: t(this.g),
        b: t(this.b),
        a: this.a
      };
    }, e.prototype.toPercentageRgbString = function() {
      var t = function(n) {
        return Math.round(q(n, 255) * 100);
      };
      return this.a === 1 ? "rgb(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%)") : "rgba(".concat(t(this.r), "%, ").concat(t(this.g), "%, ").concat(t(this.b), "%, ").concat(this.roundA, ")");
    }, e.prototype.toName = function() {
      if (this.a === 0)
        return "transparent";
      if (this.a < 1)
        return !1;
      for (var t = "#" + pn(this.r, this.g, this.b, !1), n = 0, r = Object.entries(mn); n < r.length; n++) {
        var a = r[n], i = a[0], o = a[1];
        if (t === o)
          return i;
      }
      return !1;
    }, e.prototype.toString = function(t) {
      var n = !!t;
      t = t ?? this.format;
      var r = !1, a = this.a < 1 && this.a >= 0, i = !n && a && (t.startsWith("hex") || t === "name");
      return i ? t === "name" && this.a === 0 ? this.toName() : this.toRgbString() : (t === "rgb" && (r = this.toRgbString()), t === "prgb" && (r = this.toPercentageRgbString()), (t === "hex" || t === "hex6") && (r = this.toHexString()), t === "hex3" && (r = this.toHexString(!0)), t === "hex4" && (r = this.toHex8String(!0)), t === "hex8" && (r = this.toHex8String()), t === "name" && (r = this.toName()), t === "hsl" && (r = this.toHslString()), t === "hsv" && (r = this.toHsvString()), r || this.toHexString());
    }, e.prototype.toNumber = function() {
      return (Math.round(this.r) << 16) + (Math.round(this.g) << 8) + Math.round(this.b);
    }, e.prototype.clone = function() {
      return new e(this.toString());
    }, e.prototype.lighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l += t / 100, n.l = yt(n.l), new e(n);
    }, e.prototype.brighten = function(t) {
      t === void 0 && (t = 10);
      var n = this.toRgb();
      return n.r = Math.max(0, Math.min(255, n.r - Math.round(255 * -(t / 100)))), n.g = Math.max(0, Math.min(255, n.g - Math.round(255 * -(t / 100)))), n.b = Math.max(0, Math.min(255, n.b - Math.round(255 * -(t / 100)))), new e(n);
    }, e.prototype.darken = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.l -= t / 100, n.l = yt(n.l), new e(n);
    }, e.prototype.tint = function(t) {
      return t === void 0 && (t = 10), this.mix("white", t);
    }, e.prototype.shade = function(t) {
      return t === void 0 && (t = 10), this.mix("black", t);
    }, e.prototype.desaturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s -= t / 100, n.s = yt(n.s), new e(n);
    }, e.prototype.saturate = function(t) {
      t === void 0 && (t = 10);
      var n = this.toHsl();
      return n.s += t / 100, n.s = yt(n.s), new e(n);
    }, e.prototype.greyscale = function() {
      return this.desaturate(100);
    }, e.prototype.spin = function(t) {
      var n = this.toHsl(), r = (n.h + t) % 360;
      return n.h = r < 0 ? 360 + r : r, new e(n);
    }, e.prototype.mix = function(t, n) {
      n === void 0 && (n = 50);
      var r = this.toRgb(), a = new e(t).toRgb(), i = n / 100, o = {
        r: (a.r - r.r) * i + r.r,
        g: (a.g - r.g) * i + r.g,
        b: (a.b - r.b) * i + r.b,
        a: (a.a - r.a) * i + r.a
      };
      return new e(o);
    }, e.prototype.analogous = function(t, n) {
      t === void 0 && (t = 6), n === void 0 && (n = 30);
      var r = this.toHsl(), a = 360 / n, i = [this];
      for (r.h = (r.h - (a * t >> 1) + 720) % 360; --t; )
        r.h = (r.h + a) % 360, i.push(new e(r));
      return i;
    }, e.prototype.complement = function() {
      var t = this.toHsl();
      return t.h = (t.h + 180) % 360, new e(t);
    }, e.prototype.monochromatic = function(t) {
      t === void 0 && (t = 6);
      for (var n = this.toHsv(), r = n.h, a = n.s, i = n.v, o = [], l = 1 / t; t--; )
        o.push(new e({ h: r, s: a, v: i })), i = (i + l) % 1;
      return o;
    }, e.prototype.splitcomplement = function() {
      var t = this.toHsl(), n = t.h;
      return [
        this,
        new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
        new e({ h: (n + 216) % 360, s: t.s, l: t.l })
      ];
    }, e.prototype.onBackground = function(t) {
      var n = this.toRgb(), r = new e(t).toRgb(), a = n.a + r.a * (1 - n.a);
      return new e({
        r: (n.r * n.a + r.r * r.a * (1 - n.a)) / a,
        g: (n.g * n.a + r.g * r.a * (1 - n.a)) / a,
        b: (n.b * n.a + r.b * r.a * (1 - n.a)) / a,
        a
      });
    }, e.prototype.triad = function() {
      return this.polyad(3);
    }, e.prototype.tetrad = function() {
      return this.polyad(4);
    }, e.prototype.polyad = function(t) {
      for (var n = this.toHsl(), r = n.h, a = [this], i = 360 / t, o = 1; o < t; o++)
        a.push(new e({ h: (r + o * i) % 360, s: n.s, l: n.l }));
      return a;
    }, e.prototype.equals = function(t) {
      return this.toRgbString() === new e(t).toRgbString();
    }, e;
  }()
), Z = function(t, n) {
  return new ae(t).setAlpha(n).toRgbString();
};
function ce(e) {
  "@babel/helpers - typeof";
  return ce = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ce(e);
}
function fl(e, t) {
  if (ce(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ce(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function na(e) {
  var t = fl(e, "string");
  return ce(t) == "symbol" ? t : String(t);
}
function ie(e, t, n) {
  return t = na(t), t in e ? Object.defineProperty(e, t, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = n, e;
}
function rr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function H(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? rr(Object(n), !0).forEach(function(r) {
      ie(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : rr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
var Fn = {
  blue: "#1677ff",
  purple: "#722ED1",
  cyan: "#13C2C2",
  green: "#52C41A",
  magenta: "#EB2F96",
  pink: "#eb2f96",
  red: "#F5222D",
  orange: "#FA8C16",
  yellow: "#FADB14",
  volcano: "#FA541C",
  geekblue: "#2F54EB",
  gold: "#FAAD14",
  lime: "#A0D911"
}, Dt = H(H({}, Fn), {}, {
  // Color
  colorPrimary: "#1677ff",
  colorSuccess: "#52c41a",
  colorWarning: "#faad14",
  colorError: "#ff7875",
  colorInfo: "#1677ff",
  colorTextBase: "",
  colorBgBase: "",
  // Font
  fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'",
  fontSize: 14,
  // Line
  lineWidth: 1,
  lineType: "solid",
  // Motion
  motionUnit: 0.1,
  motionBase: 0,
  motionEaseOutCirc: "cubic-bezier(0.08, 0.82, 0.17, 1)",
  motionEaseInOutCirc: "cubic-bezier(0.78, 0.14, 0.15, 0.86)",
  motionEaseOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
  motionEaseInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseOutBack: "cubic-bezier(0.12, 0.4, 0.29, 1.46)",
  motionEaseInQuint: "cubic-bezier(0.645, 0.045, 0.355, 1)",
  motionEaseInBack: "cubic-bezier(0.71, -0.46, 0.88, 0.6)",
  motionEaseOutQuint: "cubic-bezier(0.23, 1, 0.32, 1)",
  // Radius
  borderRadius: 6,
  // Size
  sizeUnit: 4,
  sizeStep: 4,
  sizePopupArrow: 16,
  // Control Base
  controlHeight: 32,
  // zIndex
  zIndexBase: 0,
  zIndexPopupBase: 1e3,
  // Image
  opacityImage: 1,
  // Wireframe
  wireframe: !1
}), St = 2, ar = 0.16, pl = 0.05, ml = 0.05, hl = 0.15, ra = 5, aa = 4, gl = [{
  index: 7,
  opacity: 0.15
}, {
  index: 6,
  opacity: 0.25
}, {
  index: 5,
  opacity: 0.3
}, {
  index: 5,
  opacity: 0.45
}, {
  index: 5,
  opacity: 0.65
}, {
  index: 5,
  opacity: 0.85
}, {
  index: 4,
  opacity: 0.9
}, {
  index: 3,
  opacity: 0.95
}, {
  index: 2,
  opacity: 0.97
}, {
  index: 1,
  opacity: 0.98
}];
function ir(e) {
  var t = e.r, n = e.g, r = e.b, a = fn(t, n, r);
  return {
    h: a.h * 360,
    s: a.s,
    v: a.v
  };
}
function xt(e) {
  var t = e.r, n = e.g, r = e.b;
  return "#".concat(pn(t, n, r, !1));
}
function vl(e, t, n) {
  var r = n / 100, a = {
    r: (t.r - e.r) * r + e.r,
    g: (t.g - e.g) * r + e.g,
    b: (t.b - e.b) * r + e.b
  };
  return a;
}
function or(e, t, n) {
  var r;
  return Math.round(e.h) >= 60 && Math.round(e.h) <= 240 ? r = n ? Math.round(e.h) - St * t : Math.round(e.h) + St * t : r = n ? Math.round(e.h) + St * t : Math.round(e.h) - St * t, r < 0 ? r += 360 : r >= 360 && (r -= 360), r;
}
function lr(e, t, n) {
  if (e.h === 0 && e.s === 0)
    return e.s;
  var r;
  return n ? r = e.s - ar * t : t === aa ? r = e.s + ar : r = e.s + pl * t, r > 1 && (r = 1), n && t === ra && r > 0.1 && (r = 0.1), r < 0.06 && (r = 0.06), Number(r.toFixed(2));
}
function ur(e, t, n) {
  var r;
  return n ? r = e.v + ml * t : r = e.v - hl * t, r > 1 && (r = 1), Number(r.toFixed(2));
}
function Ie(e) {
  for (var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = [], r = Re(e), a = ra; a > 0; a -= 1) {
    var i = ir(r), o = xt(Re({
      h: or(i, a, !0),
      s: lr(i, a, !0),
      v: ur(i, a, !0)
    }));
    n.push(o);
  }
  n.push(xt(r));
  for (var l = 1; l <= aa; l += 1) {
    var u = ir(r), s = xt(Re({
      h: or(u, l),
      s: lr(u, l),
      v: ur(u, l)
    }));
    n.push(s);
  }
  return t.theme === "dark" ? gl.map(function(d) {
    var f = d.index, h = d.opacity, p = xt(vl(Re(t.backgroundColor || "#141414"), Re(n[f]), h * 100));
    return p;
  }) : n;
}
var Qt = {
  red: "#F5222D",
  volcano: "#FA541C",
  orange: "#FA8C16",
  gold: "#FAAD14",
  yellow: "#FADB14",
  lime: "#A0D911",
  green: "#52C41A",
  cyan: "#13C2C2",
  blue: "#1890FF",
  geekblue: "#2F54EB",
  purple: "#722ED1",
  magenta: "#EB2F96",
  grey: "#666666"
}, $t = {}, Jt = {};
Object.keys(Qt).forEach(function(e) {
  $t[e] = Ie(Qt[e]), $t[e].primary = $t[e][5], Jt[e] = Ie(Qt[e], {
    theme: "dark",
    backgroundColor: "#141414"
  }), Jt[e].primary = Jt[e][5];
});
var yl = $t.blue, bl = function(t) {
  var n = t.controlHeight;
  return {
    controlHeightSM: n * 0.75,
    controlHeightXS: n * 0.5,
    controlHeightLG: n * 1.25
  };
};
function Sl(e) {
  var t = e.sizeUnit, n = e.sizeStep;
  return {
    sizeXXL: t * (n + 8),
    // 48
    sizeXL: t * (n + 4),
    // 32
    sizeLG: t * (n + 2),
    // 24
    sizeMD: t * (n + 1),
    // 20
    sizeMS: t * n,
    // 16
    size: t * n,
    // 16
    sizeSM: t * (n - 1),
    // 12
    sizeXS: t * (n - 2),
    // 8
    sizeXXS: t * (n - 3)
    // 4
  };
}
function ia(e, t) {
  var n = t.generateColorPalettes, r = t.generateNeutralColorPalettes, a = e.colorSuccess, i = e.colorWarning, o = e.colorError, l = e.colorInfo, u = e.colorPrimary, s = e.colorBgBase, d = e.colorTextBase, f = n(u), h = n(a), p = n(i), g = n(o), v = n(l), y = r(s, d);
  return H(H({}, y), {}, {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
    colorSuccessBg: h[1],
    colorSuccessBgHover: h[2],
    colorSuccessBorder: h[3],
    colorSuccessBorderHover: h[4],
    colorSuccessHover: h[4],
    colorSuccess: h[6],
    colorSuccessActive: h[7],
    colorSuccessTextHover: h[8],
    colorSuccessText: h[9],
    colorSuccessTextActive: h[10],
    colorErrorBg: g[1],
    colorErrorBgHover: g[2],
    colorErrorBorder: g[3],
    colorErrorBorderHover: g[4],
    colorErrorHover: g[5],
    colorError: g[6],
    colorErrorActive: g[7],
    colorErrorTextHover: g[8],
    colorErrorText: g[9],
    colorErrorTextActive: g[10],
    colorWarningBg: p[1],
    colorWarningBgHover: p[2],
    colorWarningBorder: p[3],
    colorWarningBorderHover: p[4],
    colorWarningHover: p[4],
    colorWarning: p[6],
    colorWarningActive: p[7],
    colorWarningTextHover: p[8],
    colorWarningText: p[9],
    colorWarningTextActive: p[10],
    colorInfoBg: v[1],
    colorInfoBgHover: v[2],
    colorInfoBorder: v[3],
    colorInfoBorderHover: v[4],
    colorInfoHover: v[4],
    colorInfo: v[6],
    colorInfoActive: v[7],
    colorInfoTextHover: v[8],
    colorInfoText: v[9],
    colorInfoTextActive: v[10],
    colorBgMask: new ae("#000").setAlpha(0.45).toRgbString(),
    colorWhite: "#fff"
  });
}
var xl = function(t) {
  var n = t, r = t, a = t, i = t;
  return t < 6 && t >= 5 ? n = t + 1 : t < 16 && t >= 6 ? n = t + 2 : t >= 16 && (n = 16), t < 7 && t >= 5 ? r = 4 : t < 8 && t >= 7 ? r = 5 : t < 14 && t >= 8 ? r = 6 : t < 16 && t >= 14 ? r = 7 : t >= 16 && (r = 8), t < 6 && t >= 2 ? a = 1 : t >= 6 && (a = 2), t > 4 && t < 8 ? i = 4 : t >= 8 && (i = 6), {
    borderRadius: t > 16 ? 16 : t,
    borderRadiusXS: a,
    borderRadiusSM: r,
    borderRadiusLG: n,
    borderRadiusOuter: i
  };
};
function Cl(e) {
  var t = e.motionUnit, n = e.motionBase, r = e.borderRadius, a = e.lineWidth;
  return H({
    // motion
    motionDurationFast: "".concat((n + t).toFixed(1), "s"),
    motionDurationMid: "".concat((n + t * 2).toFixed(1), "s"),
    motionDurationSlow: "".concat((n + t * 3).toFixed(1), "s"),
    // line
    lineWidthBold: a + 1
  }, xl(r));
}
var pe = function(t, n) {
  return new ae(t).setAlpha(n).toRgbString();
}, Ye = function(t, n) {
  var r = new ae(t);
  return r.darken(n).toHexString();
}, Tl = function(t) {
  var n = Ie(t);
  return {
    1: n[0],
    2: n[1],
    3: n[2],
    4: n[3],
    5: n[4],
    6: n[5],
    7: n[6],
    8: n[4],
    9: n[5],
    10: n[6]
    // 8: colors[7],
    // 9: colors[8],
    // 10: colors[9],
  };
}, Pl = function(t, n) {
  var r = t || "#fff", a = n || "#000";
  return {
    colorBgBase: r,
    colorTextBase: a,
    colorText: pe(a, 0.88),
    colorTextSecondary: pe(a, 0.65),
    colorTextTertiary: pe(a, 0.45),
    colorTextQuaternary: pe(a, 0.25),
    colorFill: pe(a, 0.15),
    colorFillSecondary: pe(a, 0.06),
    colorFillTertiary: pe(a, 0.04),
    colorFillQuaternary: pe(a, 0.02),
    colorBgLayout: Ye(r, 4),
    colorBgContainer: Ye(r, 0),
    colorBgElevated: Ye(r, 0),
    colorBgSpotlight: pe(a, 0.85),
    colorBorder: Ye(r, 15),
    colorBorderSecondary: Ye(r, 6)
  };
};
function wl(e) {
  var t = new Array(10).fill(null).map(function(n, r) {
    var a = r - 1, i = e * Math.pow(2.71828, a / 5), o = r > 1 ? Math.floor(i) : Math.ceil(i);
    return Math.floor(o / 2) * 2;
  });
  return t[1] = e, t.map(function(n) {
    var r = n + 8;
    return {
      size: n,
      lineHeight: r / n
    };
  });
}
var $l = function(t) {
  var n = wl(t), r = n.map(function(i) {
    return i.size;
  }), a = n.map(function(i) {
    return i.lineHeight;
  });
  return {
    fontSizeSM: r[0],
    fontSize: r[1],
    fontSizeLG: r[2],
    fontSizeXL: r[3],
    fontSizeHeading1: r[6],
    fontSizeHeading2: r[5],
    fontSizeHeading3: r[4],
    fontSizeHeading4: r[3],
    fontSizeHeading5: r[2],
    lineHeight: a[1],
    lineHeightLG: a[2],
    lineHeightSM: a[0],
    lineHeightHeading1: a[6],
    lineHeightHeading2: a[5],
    lineHeightHeading3: a[4],
    lineHeightHeading4: a[3],
    lineHeightHeading5: a[2]
  };
};
function jn(e) {
  var t = Object.keys(Fn).map(function(n) {
    var r = Ie(e[n]);
    return new Array(10).fill(1).reduce(function(a, i, o) {
      return a["".concat(String(n), "-").concat(o + 1)] = r[o], a;
    }, {});
  }).reduce(function(n, r) {
    return n = H(H({}, n), r), n;
  }, {});
  return H(H(H(H(H(H(H({}, e), t), ia(e, {
    generateColorPalettes: Tl,
    generateNeutralColorPalettes: Pl
  })), $l(e.fontSize)), Sl(e)), bl(e)), Cl(e));
}
var ge = function(t, n) {
  return new ae(t).setAlpha(n).toRgbString();
}, Ae = function(t, n) {
  var r = new ae(t);
  return r.lighten(n).toHexString();
}, Ol = function(t) {
  var n = Ie(t, {
    theme: "dark"
  });
  return {
    1: n[0],
    2: n[1],
    3: n[2],
    4: n[3],
    5: n[6],
    6: n[5],
    7: n[4],
    8: n[6],
    9: n[5],
    10: n[4]
    // 8: colors[9],
    // 9: colors[8],
    // 10: colors[7],
  };
}, Ml = function(t, n) {
  var r = t || "#000", a = n || "#fff";
  return {
    colorBgBase: r,
    colorTextBase: a,
    colorText: ge(a, 0.85),
    colorTextSecondary: ge(a, 0.65),
    colorTextTertiary: ge(a, 0.45),
    colorTextQuaternary: ge(a, 0.25),
    colorFill: ge(a, 0.18),
    colorFillSecondary: ge(a, 0.12),
    colorFillTertiary: ge(a, 0.08),
    colorFillQuaternary: ge(a, 0.04),
    colorBgElevated: Ae(r, 12),
    colorBgContainer: Ae(r, 8),
    colorBgLayout: Ae(r, 0),
    colorBgSpotlight: Ae(r, 26),
    colorBorder: Ae(r, 26),
    colorBorderSecondary: Ae(r, 19)
  };
}, Il = function(t, n) {
  var r = Object.keys(Fn).map(function(i) {
    var o = Ie(t[i], {
      theme: "dark"
    });
    return new Array(10).fill(1).reduce(function(l, u, s) {
      return l["".concat(String(i), "-").concat(s + 1)] = o[s], l;
    }, {});
  }).reduce(function(i, o) {
    return i = H(H({}, i), o), i;
  }, {}), a = n ?? jn(t);
  return H(H(H({}, a), r), ia(t, {
    generateColorPalettes: Ol,
    generateNeutralColorPalettes: Ml
  }));
};
const Fl = Il;
function hn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function jl(e) {
  if (Array.isArray(e))
    return hn(e);
}
function Bl(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function oa(e, t) {
  if (e) {
    if (typeof e == "string")
      return hn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return hn(e, t);
  }
}
function Al() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ne(e) {
  return jl(e) || Bl(e) || oa(e) || Al();
}
function Bn(e) {
  for (var t = 0, n, r = 0, a = e.length; a >= 4; ++r, a -= 4)
    n = e.charCodeAt(r) & 255 | (e.charCodeAt(++r) & 255) << 8 | (e.charCodeAt(++r) & 255) << 16 | (e.charCodeAt(++r) & 255) << 24, n = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16), n ^= /* k >>> r: */
    n >>> 24, t = /* Math.imul(k, m): */
    (n & 65535) * 1540483477 + ((n >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      t ^= e.charCodeAt(r) & 255, t = /* Math.imul(h, m): */
      (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16);
  }
  return t ^= t >>> 13, t = /* Math.imul(h, m): */
  (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), ((t ^ t >>> 15) >>> 0).toString(36);
}
function _t(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function cr(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, na(r.key), r);
  }
}
function zt(e, t, n) {
  return t && cr(e.prototype, t), n && cr(e, n), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
var sr = "%", kl = /* @__PURE__ */ function() {
  function e(t) {
    _t(this, e), ie(this, "instanceId", void 0), ie(this, "cache", /* @__PURE__ */ new Map()), this.instanceId = t;
  }
  return zt(e, [{
    key: "get",
    value: function(n) {
      return this.cache.get(Array.isArray(n) ? n.join(sr) : n) || null;
    }
  }, {
    key: "update",
    value: function(n, r) {
      var a = Array.isArray(n) ? n.join(sr) : n, i = this.cache.get(a), o = r(i);
      o === null ? this.cache.delete(a) : this.cache.set(a, o);
    }
  }]), e;
}(), El = !1;
try {
  var dr = Object.defineProperty({}, "passive", {
    get: function() {
      El = !0;
    }
  });
  window.addEventListener("testPassive", null, dr), window.removeEventListener("testPassive", null, dr);
} catch {
}
function Rl(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
function gt() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Ll = typeof process < "u" && process.versions != null && process.versions.node != null;
function la() {
  return typeof process < "u" && process.env.NODE_ENV === "TEST" ? !0 : typeof window < "u" && typeof window.document < "u" && typeof window.matchMedia < "u" && !Ll;
}
var fr = "data-vc-order", Hl = "vc-util-key", gn = /* @__PURE__ */ new Map();
function ua() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Hl;
}
function Nt(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Dl(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function ca(e) {
  return Array.from((gn.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function sa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!gt())
    return null;
  var n = t.csp, r = t.prepend, a = document.createElement("style");
  a.setAttribute(fr, Dl(r)), n != null && n.nonce && (a.nonce = n == null ? void 0 : n.nonce), a.innerHTML = e;
  var i = Nt(t), o = i.firstChild;
  if (r) {
    if (r === "queue") {
      var l = ca(i).filter(function(u) {
        return ["prepend", "prependQueue"].includes(u.getAttribute(fr));
      });
      if (l.length)
        return i.insertBefore(a, l[l.length - 1].nextSibling), a;
    }
    i.insertBefore(a, o);
  } else
    i.appendChild(a);
  return a;
}
function da(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = Nt(t);
  return ca(n).find(function(r) {
    return r.getAttribute(ua(t)) === e;
  });
}
function fa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = da(e, t);
  if (n) {
    var r = Nt(t);
    r.removeChild(n);
  }
}
function _l(e, t) {
  var n = gn.get(e);
  if (!n || !Rl(document, n)) {
    var r = sa("", t), a = r, i = a.parentNode;
    gn.set(e, i), e.removeChild(r);
  }
}
function vn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = Nt(n);
  _l(r, n);
  var a = da(t, n);
  if (a) {
    var i, o;
    if ((i = n.csp) !== null && i !== void 0 && i.nonce && a.nonce !== ((o = n.csp) === null || o === void 0 ? void 0 : o.nonce)) {
      var l;
      a.nonce = (l = n.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return a.innerHTML !== e && (a.innerHTML = e), a;
  }
  var u = sa(e, n);
  return u.setAttribute(ua(n), t), u;
}
function en(e) {
  return typeof e == "string" && e.startsWith(".") ? e.substring(1) : e;
}
function F() {
  for (var e = [], t = 0; t < arguments.length; t++) {
    var n = t < 0 || arguments.length <= t ? void 0 : arguments[t];
    if (n) {
      if (Yo(n))
        e.push(en(n));
      else if (Qr(n))
        for (var r = 0; r < n.length; r++) {
          var a = F(n[r]);
          a && e.push(en(a));
        }
      else if (Zo(n))
        for (var i in n)
          n[i] && e.push(en(i));
    }
  }
  return e.join(" ");
}
function pa(e) {
  return fi() ? (pi(e), !0) : !1;
}
function it(e) {
  return typeof e == "function" ? e() : _e(e);
}
const zl = typeof window < "u" && typeof document < "u";
typeof WorkerGlobalScope < "u" && globalThis instanceof WorkerGlobalScope;
function Nl(e, t) {
  var n;
  if (typeof e == "number")
    return e + t;
  const r = ((n = e.match(/^-?[0-9]+\.?[0-9]*/)) == null ? void 0 : n[0]) || "", a = e.slice(r.length), i = Number.parseFloat(r) + t;
  return Number.isNaN(i) ? e : i + a;
}
function ma(e) {
  return e || Se();
}
function Wl(e, t = {}) {
  if (!si(e))
    return ne(e);
  const n = Array.isArray(e.value) ? Array.from({ length: e.value.length }) : {};
  for (const r in e.value)
    n[r] = di(() => ({
      get() {
        return e.value[r];
      },
      set(a) {
        var i;
        if ((i = it(t.replaceRef)) != null ? i : !0)
          if (Array.isArray(e.value)) {
            const l = [...e.value];
            l[r] = a, e.value = l;
          } else {
            const l = { ...e.value, [r]: a };
            Object.setPrototypeOf(l, Object.getPrototypeOf(e.value)), e.value = l;
          }
        else
          e.value[r] = a;
      }
    }));
  return n;
}
function An(e, t = !0, n) {
  ma() ? Gr(e, n) : t ? e() : Ur(e);
}
function ha(e, t) {
  ma(t) && ci(e, t);
}
function He(e) {
  var t;
  const n = it(e);
  return (t = n == null ? void 0 : n.$el) != null ? t : n;
}
const Wt = zl ? window : void 0;
function Gl() {
  const e = ee(!1), t = Se();
  return t && Gr(() => {
    e.value = !0;
  }, t), e;
}
function ga(e) {
  const t = Gl();
  return m(() => (t.value, !!e()));
}
function Qe(e, t = {}) {
  const { window: n = Wt } = t, r = ga(() => n && "matchMedia" in n && typeof n.matchMedia == "function");
  let a;
  const i = ee(!1), o = (s) => {
    i.value = s.matches;
  }, l = () => {
    a && ("removeEventListener" in a ? a.removeEventListener("change", o) : a.removeListener(o));
  }, u = Mn(() => {
    r.value && (l(), a = n.matchMedia(it(e)), "addEventListener" in a ? a.addEventListener("change", o) : a.addListener(o), i.value = a.matches);
  });
  return pa(() => {
    u(), l(), a = void 0;
  }), i;
}
function Ul(e, t = {}) {
  function n(d, f) {
    let h = it(e[it(d)]);
    return f != null && (h = Nl(h, f)), typeof h == "number" && (h = `${h}px`), h;
  }
  const { window: r = Wt, strategy: a = "min-width" } = t;
  function i(d) {
    return r ? r.matchMedia(d).matches : !1;
  }
  const o = (d) => Qe(() => `(min-width: ${n(d)})`, t), l = (d) => Qe(() => `(max-width: ${n(d)})`, t), u = Object.keys(e).reduce((d, f) => (Object.defineProperty(d, f, {
    get: () => a === "min-width" ? o(f) : l(f),
    enumerable: !0,
    configurable: !0
  }), d), {});
  function s() {
    const d = Object.keys(e).map((f) => [f, o(f)]);
    return m(() => d.filter(([, f]) => f.value).map(([f]) => f));
  }
  return Object.assign(u, {
    greaterOrEqual: o,
    smallerOrEqual: l,
    greater(d) {
      return Qe(() => `(min-width: ${n(d, 0.1)})`, t);
    },
    smaller(d) {
      return Qe(() => `(max-width: ${n(d, -0.1)})`, t);
    },
    between(d, f) {
      return Qe(() => `(min-width: ${n(d)}) and (max-width: ${n(f, -0.1)})`, t);
    },
    isGreater(d) {
      return i(`(min-width: ${n(d, 0.1)})`);
    },
    isGreaterOrEqual(d) {
      return i(`(min-width: ${n(d)})`);
    },
    isSmaller(d) {
      return i(`(max-width: ${n(d, -0.1)})`);
    },
    isSmallerOrEqual(d) {
      return i(`(max-width: ${n(d)})`);
    },
    isInBetween(d, f) {
      return i(`(min-width: ${n(d)}) and (max-width: ${n(f, -0.1)})`);
    },
    current: s,
    active() {
      const d = s();
      return m(() => d.value.length === 0 ? "" : d.value.at(-1));
    }
  });
}
function Xl(e, t, n = {}) {
  const { window: r = Wt, ...a } = n;
  let i;
  const o = ga(() => r && "ResizeObserver" in r), l = () => {
    i && (i.disconnect(), i = void 0);
  }, u = m(() => Array.isArray(e) ? e.map((f) => He(f)) : [He(e)]), s = mt(
    u,
    (f) => {
      if (l(), o.value && r) {
        i = new ResizeObserver(t);
        for (const h of f)
          h && i.observe(h, a);
      }
    },
    { immediate: !0, flush: "post" }
  ), d = () => {
    l(), s();
  };
  return pa(d), {
    isSupported: o,
    stop: d
  };
}
function va(e, t = { width: 0, height: 0 }, n = {}) {
  const { window: r = Wt, box: a = "content-box" } = n, i = m(() => {
    var f, h;
    return (h = (f = He(e)) == null ? void 0 : f.namespaceURI) == null ? void 0 : h.includes("svg");
  }), o = ee(t.width), l = ee(t.height), { stop: u } = Xl(
    e,
    ([f]) => {
      const h = a === "border-box" ? f.borderBoxSize : a === "content-box" ? f.contentBoxSize : f.devicePixelContentBoxSize;
      if (r && i.value) {
        const p = He(e);
        if (p) {
          const g = r.getComputedStyle(p);
          o.value = Number.parseFloat(g.width), l.value = Number.parseFloat(g.height);
        }
      } else if (h) {
        const p = Array.isArray(h) ? h : [h];
        o.value = p.reduce((g, { inlineSize: v }) => g + v, 0), l.value = p.reduce((g, { blockSize: v }) => g + v, 0);
      } else
        o.value = f.contentRect.width, l.value = f.contentRect.height;
    },
    n
  );
  An(() => {
    const f = He(e);
    f && (o.value = "offsetWidth" in f ? f.offsetWidth : t.width, l.value = "offsetHeight" in f ? f.offsetHeight : t.height);
  });
  const s = mt(
    () => He(e),
    (f) => {
      o.value = f ? t.width : 0, l.value = f ? t.height : 0;
    }
  );
  function d() {
    u(), s();
  }
  return {
    width: o,
    height: l,
    stop: d
  };
}
var Kl = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1600
};
function ya() {
  return Ul(Kl);
}
function Vl(e) {
  return {
    type: Object,
    default: e
  };
}
function tn(e) {
  return {
    type: Boolean,
    default: e
  };
}
function Zl(e, t) {
  var n = {
    validator: function() {
      return !0;
    },
    default: e
  };
  return n;
}
function pr(e) {
  return {
    type: Array,
    default: e
  };
}
function mr(e) {
  return {
    type: String,
    default: e
  };
}
function ql(e, t) {
  return e ? {
    type: e,
    default: t
  } : Zl(t);
}
function Yl(e, t) {
  return eu(e) || Jl(e, t) || ba(e, t) || Ql();
}
function Ql() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Jl(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, i, o, l = [], u = !0, s = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        u = !1;
      } else
        for (; !(u = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); u = !0)
          ;
    } catch (d) {
      s = !0, a = d;
    } finally {
      try {
        if (!u && n.return != null && (o = n.return(), Object(o) !== o))
          return;
      } finally {
        if (s)
          throw a;
      }
    }
    return l;
  }
}
function eu(e) {
  if (Array.isArray(e))
    return e;
}
function tu(e) {
  return au(e) || ru(e) || ba(e) || nu();
}
function nu() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function ba(e, t) {
  if (e) {
    if (typeof e == "string")
      return yn(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return yn(e, t);
  }
}
function ru(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function au(e) {
  if (Array.isArray(e))
    return yn(e);
}
function yn(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
var iu = function(t, n) {
  if (t.install = function(u) {
    for (var s = 0, d = [t].concat(tu(Object.values(n ?? {}))); s < d.length; s++) {
      var f = d[s];
      u.component(f.name, f);
    }
  }, n)
    for (var r = 0, a = Object.entries(n); r < a.length; r++) {
      var i = Yl(a[r], 2), o = i[0], l = i[1];
      t[o] = l;
    }
  return t;
}, hr = {};
function ou(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function lu(e, t, n) {
  !t && !hr[n] && (e(!1, n), hr[n] = !0);
}
function Sa(e, t) {
  lu(ou, e, t);
}
var xa = "data-token-hash", $e = "data-css-hash", uu = "data-cache-path", De = "__cssinjs_instance__";
function ot() {
  var e = Math.random().toString(12).slice(2);
  if (typeof document < "u" && document.head && document.body) {
    var t = document.body.querySelectorAll("style[".concat($e, "]")) || [], n = document.head.firstChild;
    Array.from(t).forEach(function(a) {
      a[De] = a[De] || e, a[De] === e && document.head.insertBefore(a, n);
    });
    var r = {};
    Array.from(document.querySelectorAll("style[".concat($e, "]"))).forEach(function(a) {
      var i = a.getAttribute($e);
      if (r[i]) {
        if (a[De] === e) {
          var o;
          (o = a.parentNode) === null || o === void 0 || o.removeChild(a);
        }
      } else
        r[i] = !0;
    });
  }
  return new kl(e);
}
var Ca = Symbol("StyleContextKey"), cu = function() {
  var t = Se(), n;
  if (t && t.appContext) {
    var r, a = (r = t.appContext) === null || r === void 0 || (r = r.config) === null || r === void 0 || (r = r.globalProperties) === null || r === void 0 ? void 0 : r.__ANTDV_CSSINJS_CACHE__;
    a ? n = a : (n = ot(), t.appContext.config.globalProperties && (t.appContext.config.globalProperties.__ANTDV_CSSINJS_CACHE__ = n));
  } else
    n = ot();
  return n;
}, Ta = {
  cache: ot(),
  defaultCache: !0,
  hashPriority: "low"
}, Gt = function() {
  var t = cu();
  return Fe(Ca, rt(H(H({}, Ta), {}, {
    cache: t
  })));
}, su = function(t) {
  var n = Gt(), r = rt(H(H({}, Ta), {}, {
    cache: ot()
  }));
  return mt([function() {
    return _e(t);
  }, n], function() {
    var a = H({}, n.value), i = _e(t), o = Object.keys(i);
    o.forEach(function(u) {
      var s = i[u];
      i[u] !== void 0 && (a[u] = s);
    });
    var l = i.cache;
    a.cache = a.cache || ot(), a.defaultCache = !l && n.value.defaultCache, r.value = a;
  }, {
    immediate: !0
  }), pt(Ca, r), r;
}, du = function() {
  return {
    autoClear: tn(),
    /** @private Test only. Not work in production. */
    mock: mr(),
    /**
     * Only set when you need ssr to extract style on you own.
     * If not provided, it will auto create <style /> on the end of Provider in server side.
     */
    cache: Vl(),
    /** Tell children that this context is default generated context */
    defaultCache: tn(),
    /** Use `:where` selector to reduce hashId css selector priority */
    hashPriority: mr(),
    /** Tell cssinjs where to inject style in */
    container: ql(),
    /** Component wil render inline  `<style />` for fallback in SSR. Not recommend. */
    ssrInline: tn(),
    /** Transform css before inject in document. Please note that `transformers` do not support dynamic update */
    transformers: pr(),
    /**
     * Linters to lint css before inject in document.
     * Styles will be linted after transforming.
     * Please note that `linters` do not support dynamic update.
     */
    linters: pr()
  };
};
iu(_({
  name: "AStyleProvider",
  inheritAttrs: !1,
  props: du(),
  setup: function(t, n) {
    var r = n.slots;
    return su(t), function() {
      var a;
      return (a = r.default) === null || a === void 0 ? void 0 : a.call(r);
    };
  }
}));
function fu(e) {
  if (Array.isArray(e))
    return e;
}
function pu(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r, a, i, o, l = [], u = !0, s = !1;
    try {
      if (i = (n = n.call(e)).next, t === 0) {
        if (Object(n) !== n)
          return;
        u = !1;
      } else
        for (; !(u = (r = i.call(n)).done) && (l.push(r.value), l.length !== t); u = !0)
          ;
    } catch (d) {
      s = !0, a = d;
    } finally {
      try {
        if (!u && n.return != null && (o = n.return(), Object(o) !== o))
          return;
      } finally {
        if (s)
          throw a;
      }
    }
    return l;
  }
}
function mu() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function se(e, t) {
  return fu(e) || pu(e, t) || oa(e, t) || mu();
}
function hu() {
  return !1;
}
var bn = !1;
function gu() {
  return bn;
}
const vu = process.env.NODE_ENV === "production" ? hu : gu;
if (process.env.NODE_ENV !== "production" && typeof module < "u" && module && module.hot && typeof window < "u") {
  var nn = window;
  if (typeof nn.webpackHotUpdate == "function") {
    var yu = nn.webpackHotUpdate;
    nn.webpackHotUpdate = function() {
      return bn = !0, setTimeout(function() {
        bn = !1;
      }, 0), yu.apply(void 0, arguments);
    };
  }
}
function Pa(e, t, n, r) {
  var a = Gt(), i = rt(""), o = rt();
  Mn(function() {
    i.value = [e].concat(Ne(t.value)).join("%");
  });
  var l = vu(), u = function(d) {
    a.value.cache.update(d, function(f) {
      var h = f || [], p = se(h, 2), g = p[0], v = g === void 0 ? 0 : g, y = p[1], $ = v - 1;
      return $ === 0 ? (r == null || r(y, !1), null) : [v - 1, y];
    });
  };
  return mt(i, function(s, d) {
    d && u(d), a.value.cache.update(s, function(f) {
      var h = f || [], p = se(h, 2), g = p[0], v = g === void 0 ? 0 : g, y = p[1], $ = y;
      process.env.NODE_ENV !== "production" && y && l && (r == null || r($, l), $ = null);
      var C = $ || n();
      return [v + 1, C];
    }), o.value = a.value.cache.get(i.value)[1];
  }, {
    immediate: !0
  }), mi(function() {
    u(i.value);
  }), o;
}
function bu(e, t) {
  if (e.length !== t.length)
    return !1;
  for (var n = 0; n < e.length; n++)
    if (e[n] !== t[n])
      return !1;
  return !0;
}
var kn = /* @__PURE__ */ function() {
  function e() {
    _t(this, e), ie(this, "cache", void 0), ie(this, "keys", void 0), ie(this, "cacheCallTimes", void 0), this.cache = /* @__PURE__ */ new Map(), this.keys = [], this.cacheCallTimes = 0;
  }
  return zt(e, [{
    key: "size",
    value: function() {
      return this.keys.length;
    }
  }, {
    key: "internalGet",
    value: function(n) {
      var r, a, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, o = {
        map: this.cache
      };
      return n.forEach(function(l) {
        if (!o)
          o = void 0;
        else {
          var u;
          o = (u = o) === null || u === void 0 || (u = u.map) === null || u === void 0 ? void 0 : u.get(l);
        }
      }), (r = o) !== null && r !== void 0 && r.value && i && (o.value[1] = this.cacheCallTimes++), (a = o) === null || a === void 0 ? void 0 : a.value;
    }
  }, {
    key: "get",
    value: function(n) {
      var r;
      return (r = this.internalGet(n, !0)) === null || r === void 0 ? void 0 : r[0];
    }
  }, {
    key: "has",
    value: function(n) {
      return !!this.internalGet(n);
    }
  }, {
    key: "set",
    value: function(n, r) {
      var a = this;
      if (!this.has(n)) {
        if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
          var i = this.keys.reduce(function(s, d) {
            var f = se(s, 2), h = f[1];
            return a.internalGet(d)[1] < h ? [d, a.internalGet(d)[1]] : s;
          }, [this.keys[0], this.cacheCallTimes]), o = se(i, 1), l = o[0];
          this.delete(l);
        }
        this.keys.push(n);
      }
      var u = this.cache;
      n.forEach(function(s, d) {
        if (d === n.length - 1)
          u.set(s, {
            value: [r, a.cacheCallTimes++]
          });
        else {
          var f = u.get(s);
          f ? f.map || (f.map = /* @__PURE__ */ new Map()) : u.set(s, {
            map: /* @__PURE__ */ new Map()
          }), u = u.get(s).map;
        }
      });
    }
  }, {
    key: "deleteByPath",
    value: function(n, r) {
      var a = n.get(r[0]);
      if (r.length === 1) {
        var i;
        return a.map ? n.set(r[0], {
          map: a.map
        }) : n.delete(r[0]), (i = a.value) === null || i === void 0 ? void 0 : i[0];
      }
      var o = this.deleteByPath(a.map, r.slice(1));
      return (!a.map || a.map.size === 0) && !a.value && n.delete(r[0]), o;
    }
  }, {
    key: "delete",
    value: function(n) {
      if (this.has(n))
        return this.keys = this.keys.filter(function(r) {
          return !bu(r, n);
        }), this.deleteByPath(this.cache, n);
    }
  }]), e;
}();
ie(kn, "MAX_CACHE_SIZE", 20);
ie(kn, "MAX_CACHE_OFFSET", 5);
var gr = 0, wa = /* @__PURE__ */ function() {
  function e(t) {
    _t(this, e), ie(this, "derivatives", void 0), ie(this, "id", void 0), this.derivatives = Array.isArray(t) ? t : [t], this.id = gr, t.length === 0 && Sa(t.length > 0, "[CSS-in-JS] Theme should have at least one derivative function."), gr += 1;
  }
  return zt(e, [{
    key: "getDerivativeToken",
    value: function(n) {
      return this.derivatives.reduce(function(r, a) {
        return a(n, r);
      }, void 0);
    }
  }]), e;
}(), rn = new kn();
function $a(e) {
  var t = Array.isArray(e) ? e : [e];
  return rn.has(t) || rn.set(t, new wa(t)), rn.get(t);
}
var vr = /* @__PURE__ */ new WeakMap();
function Et(e) {
  var t = vr.get(e) || "";
  return t || (Object.keys(e).forEach(function(n) {
    var r = e[n];
    t += n, r instanceof wa ? t += r.id : r && ce(r) === "object" ? t += Et(r) : t += r;
  }), vr.set(e, t)), t;
}
function Su(e, t) {
  return Bn("".concat(t, "_").concat(Et(e)));
}
var tt = "random-".concat(Date.now(), "-").concat(Math.random()).replace(/\./g, ""), Oa = "_bAmBoO_";
function xu(e, t, n) {
  if (gt()) {
    var r, a;
    vn(e, tt);
    var i = document.createElement("div");
    i.style.position = "fixed", i.style.left = "0", i.style.top = "0", t == null || t(i), document.body.appendChild(i), process.env.NODE_ENV !== "production" && (i.innerHTML = "Test", i.style.zIndex = "9999999");
    var o = n ? n(i) : (r = getComputedStyle(i).content) === null || r === void 0 ? void 0 : r.includes(Oa);
    return (a = i.parentNode) === null || a === void 0 || a.removeChild(i), fa(tt), o;
  }
  return !1;
}
var an = void 0;
function Cu() {
  return an === void 0 && (an = xu("@layer ".concat(tt, " { .").concat(tt, ' { content: "').concat(Oa, '"!important; } }'), function(e) {
    e.className = tt;
  })), an;
}
var yr = {}, Tu = process.env.NODE_ENV !== "production" ? "css-dev-only-do-not-override" : "css", Pe = /* @__PURE__ */ new Map();
function Pu(e) {
  Pe.set(e, (Pe.get(e) || 0) + 1);
}
function wu(e, t) {
  if (typeof document < "u") {
    var n = document.querySelectorAll("style[".concat(xa, '="').concat(e, '"]'));
    n.forEach(function(r) {
      if (r[De] === t) {
        var a;
        (a = r.parentNode) === null || a === void 0 || a.removeChild(r);
      }
    });
  }
}
var $u = 0;
function Ou(e, t) {
  Pe.set(e, (Pe.get(e) || 0) - 1);
  var n = Array.from(Pe.keys()), r = n.filter(function(a) {
    var i = Pe.get(a) || 0;
    return i <= 0;
  });
  n.length - r.length > $u && r.forEach(function(a) {
    wu(a, t), Pe.delete(a);
  });
}
var Mu = function(t, n, r, a) {
  var i = r.getDerivativeToken(t), o = H(H({}, i), n);
  return a && (o = a(o)), o;
};
function Iu(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ee({}), r = Gt(), a = m(function() {
    return Object.assign.apply(Object, [{}].concat(Ne(t.value)));
  }), i = m(function() {
    return Et(a.value);
  }), o = m(function() {
    return Et(n.value.override || yr);
  }), l = Pa("token", m(function() {
    return [n.value.salt || "", e.value.id, i.value, o.value];
  }), function() {
    var u = n.value, s = u.salt, d = s === void 0 ? "" : s, f = u.override, h = f === void 0 ? yr : f, p = u.formatToken, g = u.getComputedToken, v = g ? g(a.value, h, e.value) : Mu(a.value, h, e.value, p), y = Su(v, d);
    v._tokenKey = y, Pu(y);
    var $ = "".concat(Tu, "-").concat(Bn(y));
    return v._hashId = $, [v, $];
  }, function(u) {
    var s;
    Ou(u[0]._tokenKey, (s = r.value) === null || s === void 0 ? void 0 : s.cache.instanceId);
  });
  return l;
}
var Fu = {
  animationIterationCount: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, Ma = "comm", Ia = "rule", Fa = "decl", ju = "@import", Bu = "@keyframes", Au = "@layer", ja = Math.abs, En = String.fromCharCode;
function Ba(e) {
  return e.trim();
}
function Ot(e, t, n) {
  return e.replace(t, n);
}
function ku(e, t, n) {
  return e.indexOf(t, n);
}
function lt(e, t) {
  return e.charCodeAt(t) | 0;
}
function ut(e, t, n) {
  return e.slice(t, n);
}
function me(e) {
  return e.length;
}
function Eu(e) {
  return e.length;
}
function Ct(e, t) {
  return t.push(e), e;
}
var Ut = 1, We = 1, Aa = 0, oe = 0, K = 0, Ge = "";
function Rn(e, t, n, r, a, i, o, l) {
  return { value: e, root: t, parent: n, type: r, props: a, children: i, line: Ut, column: We, length: o, return: "", siblings: l };
}
function Ru() {
  return K;
}
function Lu() {
  return K = oe > 0 ? lt(Ge, --oe) : 0, We--, K === 10 && (We = 1, Ut--), K;
}
function ue() {
  return K = oe < Aa ? lt(Ge, oe++) : 0, We++, K === 10 && (We = 1, Ut++), K;
}
function Oe() {
  return lt(Ge, oe);
}
function Mt() {
  return oe;
}
function Xt(e, t) {
  return ut(Ge, e, t);
}
function Sn(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Hu(e) {
  return Ut = We = 1, Aa = me(Ge = e), oe = 0, [];
}
function Du(e) {
  return Ge = "", e;
}
function on(e) {
  return Ba(Xt(oe - 1, xn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function _u(e) {
  for (; (K = Oe()) && K < 33; )
    ue();
  return Sn(e) > 2 || Sn(K) > 3 ? "" : " ";
}
function zu(e, t) {
  for (; --t && ue() && !(K < 48 || K > 102 || K > 57 && K < 65 || K > 70 && K < 97); )
    ;
  return Xt(e, Mt() + (t < 6 && Oe() == 32 && ue() == 32));
}
function xn(e) {
  for (; ue(); )
    switch (K) {
      case e:
        return oe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && xn(K);
        break;
      case 40:
        e === 41 && xn(e);
        break;
      case 92:
        ue();
        break;
    }
  return oe;
}
function Nu(e, t) {
  for (; ue() && e + K !== 57; )
    if (e + K === 84 && Oe() === 47)
      break;
  return "/*" + Xt(t, oe - 1) + "*" + En(e === 47 ? e : ue());
}
function Wu(e) {
  for (; !Sn(Oe()); )
    ue();
  return Xt(e, oe);
}
function Gu(e) {
  return Du(It("", null, null, null, [""], e = Hu(e), 0, [0], e));
}
function It(e, t, n, r, a, i, o, l, u) {
  for (var s = 0, d = 0, f = o, h = 0, p = 0, g = 0, v = 1, y = 1, $ = 1, C = 0, j = "", B = a, I = i, O = r, T = j; y; )
    switch (g = C, C = ue()) {
      case 40:
        if (g != 108 && lt(T, f - 1) == 58) {
          ku(T += Ot(on(C), "&", "&\f"), "&\f", ja(s ? l[s - 1] : 0)) != -1 && ($ = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        T += on(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        T += _u(g);
        break;
      case 92:
        T += zu(Mt() - 1, 7);
        continue;
      case 47:
        switch (Oe()) {
          case 42:
          case 47:
            Ct(Uu(Nu(ue(), Mt()), t, n, u), u);
            break;
          default:
            T += "/";
        }
        break;
      case 123 * v:
        l[s++] = me(T) * $;
      case 125 * v:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            y = 0;
          case 59 + d:
            $ == -1 && (T = Ot(T, /\f/g, "")), p > 0 && me(T) - f && Ct(p > 32 ? Sr(T + ";", r, n, f - 1, u) : Sr(Ot(T, " ", "") + ";", r, n, f - 2, u), u);
            break;
          case 59:
            T += ";";
          default:
            if (Ct(O = br(T, t, n, s, d, a, l, j, B = [], I = [], f, i), i), C === 123)
              if (d === 0)
                It(T, t, O, O, B, i, f, l, I);
              else
                switch (h === 99 && lt(T, 3) === 110 ? 100 : h) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    It(e, O, O, r && Ct(br(e, O, O, 0, 0, a, l, j, a, B = [], f, I), I), a, I, f, l, r ? B : I);
                    break;
                  default:
                    It(T, O, O, O, [""], I, 0, l, I);
                }
        }
        s = d = p = 0, v = $ = 1, j = T = "", f = o;
        break;
      case 58:
        f = 1 + me(T), p = g;
      default:
        if (v < 1) {
          if (C == 123)
            --v;
          else if (C == 125 && v++ == 0 && Lu() == 125)
            continue;
        }
        switch (T += En(C), C * v) {
          case 38:
            $ = d > 0 ? 1 : (T += "\f", -1);
            break;
          case 44:
            l[s++] = (me(T) - 1) * $, $ = 1;
            break;
          case 64:
            Oe() === 45 && (T += on(ue())), h = Oe(), d = f = me(j = T += Wu(Mt())), C++;
            break;
          case 45:
            g === 45 && me(T) == 2 && (v = 0);
        }
    }
  return i;
}
function br(e, t, n, r, a, i, o, l, u, s, d, f) {
  for (var h = a - 1, p = a === 0 ? i : [""], g = Eu(p), v = 0, y = 0, $ = 0; v < r; ++v)
    for (var C = 0, j = ut(e, h + 1, h = ja(y = o[v])), B = e; C < g; ++C)
      (B = Ba(y > 0 ? p[C] + " " + j : Ot(j, /&\f/g, p[C]))) && (u[$++] = B);
  return Rn(e, t, n, a === 0 ? Ia : l, u, s, d, f);
}
function Uu(e, t, n, r) {
  return Rn(e, t, n, Ma, En(Ru()), ut(e, 2, -2), 0, r);
}
function Sr(e, t, n, r, a) {
  return Rn(e, t, n, Fa, ut(e, 0, r), ut(e, r + 1, -1), r, a);
}
function Cn(e, t) {
  for (var n = "", r = 0; r < e.length; r++)
    n += t(e[r], r, e, t) || "";
  return n;
}
function Xu(e, t, n, r) {
  switch (e.type) {
    case Au:
      if (e.children.length)
        break;
    case ju:
    case Fa:
      return e.return = e.return || e.value;
    case Ma:
      return "";
    case Bu:
      return e.return = e.value + "{" + Cn(e.children, r) + "}";
    case Ia:
      if (!me(e.value = e.props.join(",")))
        return "";
  }
  return me(n = Cn(e.children, r)) ? e.return = e.value + "{" + n + "}" : "";
}
function ka(e, t) {
  var n = t.path, r = t.parentSelectors;
  Sa(!1, "[Ant Design Vue CSS-in-JS] ".concat(n ? "Error in '".concat(n, "': ") : "").concat(e).concat(r.length ? " Selector info: ".concat(r.join(" -> ")) : ""));
}
var Ku = function(t, n, r) {
  if (t === "content") {
    var a = /(attr|counters?|url|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, i = ["normal", "none", "initial", "inherit", "unset"];
    (typeof n != "string" || i.indexOf(n) === -1 && !a.test(n) && (n.charAt(0) !== n.charAt(n.length - 1) || n.charAt(0) !== '"' && n.charAt(0) !== "'")) && ka("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"".concat(n, "\"'`."), r);
  }
}, Vu = function(t, n, r) {
  t === "animation" && r.hashId && n !== "none" && ka("You seem to be using hashed animation '".concat(n, "', in which case 'animationName' with Keyframe as value is recommended."), r);
}, xr = "data-maya-cssinjs-cache-path", Zu = "_FILE_STYLE__", Me, Ea = !0;
function qu() {
  if (!Me && (Me = {}, gt())) {
    var e = document.createElement("div");
    e.className = xr, e.style.position = "fixed", e.style.visibility = "hidden", e.style.top = "-9999px", document.body.appendChild(e);
    var t = getComputedStyle(e).content || "";
    t = t.replace(/^"/, "").replace(/"$/, ""), t.split(";").forEach(function(a) {
      var i = a.split(":"), o = se(i, 2), l = o[0], u = o[1];
      Me[l] = u;
    });
    var n = document.querySelector("style[".concat(xr, "]"));
    if (n) {
      var r;
      Ea = !1, (r = n.parentNode) === null || r === void 0 || r.removeChild(n);
    }
    document.body.removeChild(e);
  }
}
function Yu(e) {
  return qu(), !!Me[e];
}
function Qu(e) {
  var t = Me[e], n = null;
  if (t && gt())
    if (Ea)
      n = Zu;
    else {
      var r = document.querySelector("style[".concat($e, '="').concat(Me[e], '"]'));
      r ? n = r.innerHTML : delete Me[e];
    }
  return [n, t];
}
var Cr = gt(), Ra = "_skip_check_", La = "_multi_value_";
function Tr(e) {
  var t = Cn(Gu(e), Xu);
  return t.replace(/\{%%%\:[^;];}/g, ";");
}
function Ju(e) {
  return ce(e) === "object" && e && (Ra in e || La in e);
}
function ec(e, t, n) {
  if (!t)
    return e;
  var r = ".".concat(t), a = n === "low" ? ":where(".concat(r, ")") : r, i = e.split(",").map(function(o) {
    var l, u = o.trim().split(/\s+/), s = u[0] || "", d = ((l = s.match(/^\w+/)) === null || l === void 0 ? void 0 : l[0]) || "";
    return s = "".concat(d).concat(a).concat(s.slice(d.length)), [s].concat(Ne(u.slice(1))).join(" ");
  });
  return i.join(",");
}
var Tn = /* @__PURE__ */ new Set();
process.env.NODE_ENV;
var tc = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {
    root: !0,
    parentSelectors: []
  }, a = r.root, i = r.injectHash, o = r.parentSelectors, l = n.hashId, u = n.layer, s = n.path, d = n.hashPriority, f = n.transformers, h = f === void 0 ? [] : f, p = n.linters, g = p === void 0 ? [] : p, v = "", y = {};
  function $(O) {
    var T = O.getName(l);
    if (!y[T]) {
      var E = e(O.style, n, {
        root: !1,
        parentSelectors: o
      }), L = se(E, 1), b = L[0];
      y[T] = "@keyframes ".concat(O.getName(l)).concat(b);
    }
  }
  function C(O) {
    var T = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    return O.forEach(function(E) {
      Array.isArray(E) ? C(E, T) : E && T.push(E);
    }), T;
  }
  var j = C(Array.isArray(t) ? t : [t]);
  if (j.forEach(function(O) {
    var T = typeof O == "string" && !a ? {} : O;
    if (typeof T == "string")
      v += "".concat(T, `
`);
    else if (T._keyframe)
      $(T);
    else {
      var E = h.reduce(function(L, b) {
        var A;
        return (b == null || (A = b.visit) === null || A === void 0 ? void 0 : A.call(b, L)) || L;
      }, T);
      Object.keys(E).forEach(function(L) {
        var b = E[L];
        if (ce(b) === "object" && b && (L !== "animationName" || !b._keyframe) && !Ju(b)) {
          var A = !1, G = L.trim(), V = !1;
          (a || i) && l ? G.startsWith("@") ? A = !0 : G = ec(L, l, d) : a && !l && (G === "&" || G === "") && (G = "", V = !0);
          var P = e(b, n, {
            root: V,
            injectHash: A,
            parentSelectors: [].concat(Ne(o), [G])
          }), S = se(P, 2), x = S[0], M = S[1];
          y = H(H({}, y), M), v += "".concat(G).concat(x);
        } else {
          let R = function(D, z) {
            process.env.NODE_ENV !== "production" && (ce(b) !== "object" || !(b != null && b[Ra])) && [Ku, Vu].concat(Ne(g)).forEach(function(J) {
              return J(D, z, {
                path: s,
                hashId: l,
                parentSelectors: o
              });
            });
            var X = D.replace(/[A-Z]/g, function(J) {
              return "-".concat(J.toLowerCase());
            }), W = z;
            !Fu[D] && typeof W == "number" && W !== 0 && (W = "".concat(W, "px")), D === "animationName" && z !== null && z !== void 0 && z._keyframe && ($(z), W = z.getName(l)), v += "".concat(X, ":").concat(W, ";");
          };
          var w, k = (w = b == null ? void 0 : b.value) !== null && w !== void 0 ? w : b;
          ce(b) === "object" && b !== null && b !== void 0 && b[La] && Array.isArray(k) ? k.forEach(function(D) {
            R(L, D);
          }) : R(L, k);
        }
      });
    }
  }), !a)
    v = "{".concat(v, "}");
  else if (u && Cu()) {
    var B = u.split(","), I = B[B.length - 1].trim();
    v = "@layer ".concat(I, " {").concat(v, "}"), B.length > 1 && (v = "@layer ".concat(u, "{%%%:%}").concat(v));
  }
  return [v, y];
};
function nc(e, t) {
  return Bn("".concat(e.join("%")).concat(t));
}
function rc(e, t) {
  var n = Gt(), r = m(function() {
    return e.value.token._tokenKey;
  }), a = m(function() {
    return [r.value].concat(Ne(e.value.path));
  }), i = Cr;
  return process.env.NODE_ENV !== "production" && n.value.mock !== void 0 && (i = n.value.mock === "client"), Pa(
    "style",
    a,
    // Create cache if needed
    function() {
      var o = e.value, l = o.path, u = o.hashId, s = o.layer, d = o.nonce, f = o.clientOnly, h = o.order, p = h === void 0 ? 0 : h, g = a.value.join("|");
      if (Yu(g)) {
        var v = Qu(g), y = se(v, 2), $ = y[0], C = y[1];
        if ($)
          return [$, r.value, C, {}, f, p];
      }
      var j = t(), B = n.value, I = B.hashPriority, O = B.container, T = B.transformers, E = B.linters, L = B.cache, b = tc(j, {
        hashId: u,
        hashPriority: I,
        layer: s,
        path: l.join("-"),
        transformers: T,
        linters: E
      }), A = se(b, 2), G = A[0], V = A[1], P = Tr(G), S = nc(a.value, P);
      if (i) {
        var x = {
          mark: $e,
          prepend: "queue",
          attachTo: O,
          priority: p
        }, M = typeof d == "function" ? d() : d;
        M && (x.csp = {
          nonce: M
        });
        var w = vn(P, S, x);
        w[De] = L.instanceId, w.setAttribute(xa, r.value), process.env.NODE_ENV !== "production" && w.setAttribute(uu, a.value.join("|")), Object.keys(V).forEach(function(k) {
          Tn.has(k) || (Tn.add(k), vn(Tr(V[k]), "_effect-".concat(k), {
            mark: $e,
            prepend: "queue",
            attachTo: O
          }));
        });
      }
      return [P, r.value, S, V, f, p];
    },
    // Remove cache if no need
    function(o, l) {
      var u = se(o, 3), s = u[2];
      (l || n.value.autoClear) && Cr && fa(s, {
        mark: $e
      });
    }
  ), function(o) {
    return o;
  };
}
var ac = /* @__PURE__ */ function() {
  function e(t, n) {
    _t(this, e), ie(this, "name", void 0), ie(this, "style", void 0), ie(this, "_keyframe", !0), this.name = t, this.style = n;
  }
  return zt(e, [{
    key: "getName",
    value: function() {
      var n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
      return n ? "".concat(n, "-").concat(this.name) : this.name;
    }
  }]), e;
}();
function ke(e) {
  return e.notSplit = !0, e;
}
ke(["borderTop", "borderBottom"]), ke(["borderTop"]), ke(["borderBottom"]), ke(["borderLeft", "borderRight"]), ke(["borderLeft"]), ke(["borderRight"]);
var ic = $a(jn), Ha = {
  token: Dt,
  hashed: !0
}, Pn = rt(), Da = Symbol("DesignTokenContext"), oc = function(t) {
  pt(Da, t), mt(t, function() {
    Pn.value = _e(t), hi(Pn);
  }, {
    immediate: !0,
    deep: !0
  });
}, lc = function() {
  var t = m(function() {
    return Pn.value || Ha;
  });
  return Fe(Da, t);
}, uc = _({
  name: "DesignTokenProvider",
  props: {
    context: Object
  },
  slots: Object,
  setup: function(t, n) {
    var r = n.slots, a = m(function() {
      return t.context;
    });
    return oc(a), function() {
      var i;
      return (i = r.default) === null || i === void 0 ? void 0 : i.call(r);
    };
  }
});
const cc = uc, sc = "0.0.0";
function dc(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function fc(e, t) {
  if (e == null)
    return {};
  var n = dc(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function ln(e) {
  return e >= 0 && e <= 255;
}
function Tt(e, t) {
  var n = new ae(e).toRgb(), r = n.r, a = n.g, i = n.b, o = n.a;
  if (o < 1)
    return e;
  for (var l = new ae(t).toRgb(), u = l.r, s = l.g, d = l.b, f = 0.01; f <= 1; f += 0.01) {
    var h = Math.round((r - u * (1 - f)) / f), p = Math.round((a - s * (1 - f)) / f), g = Math.round((i - d * (1 - f)) / f);
    if (ln(h) && ln(p) && ln(g))
      return new ae({
        r: h,
        g: p,
        b: g,
        a: Math.round(f * 100) / 100
      }).toRgbString();
  }
  return new ae({
    r,
    g: a,
    b: i,
    a: 1
  }).toRgbString();
}
var pc = ["override"];
function mc(e) {
  var t = e.override, n = fc(e, pc), r = H({}, t);
  Object.keys(Dt).forEach(function(p) {
    delete r[p];
  });
  var a = H(H({}, n), r), i = 480, o = 576, l = 768, u = 992, s = 1200, d = 1600, f = 2e3, h = H(H({}, a), {}, {
    colorLink: a.colorInfoText,
    colorLinkHover: a.colorInfoHover,
    colorLinkActive: a.colorInfoActive,
    // ============== Background ============== //
    colorFillContent: a.colorFillSecondary,
    colorFillContentHover: a.colorFill,
    colorFillAlter: a.colorFillQuaternary,
    colorBgContainerDisabled: a.colorFillTertiary,
    // ============== Split ============== //
    colorBorderBg: a.colorBgContainer,
    colorSplit: Tt(a.colorBorderSecondary, a.colorBgContainer),
    // ============== Text ============== //
    colorTextPlaceholder: a.colorTextQuaternary,
    colorTextDisabled: a.colorTextQuaternary,
    colorTextHeading: a.colorText,
    colorTextLabel: a.colorTextSecondary,
    colorTextDescription: a.colorTextTertiary,
    colorTextLightSolid: a.colorWhite,
    colorHighlight: a.colorError,
    colorBgTextHover: a.colorFillSecondary,
    colorBgTextActive: a.colorFill,
    colorIcon: a.colorTextTertiary,
    colorIconHover: a.colorText,
    colorErrorOutline: Tt(a.colorErrorBg, a.colorBgContainer),
    colorWarningOutline: Tt(a.colorWarningBg, a.colorBgContainer),
    // Font
    fontSizeIcon: a.fontSizeSM,
    // Control
    lineWidth: a.lineWidth,
    controlOutlineWidth: a.lineWidth * 2,
    // Checkbox size and expand icon size
    controlInteractiveSize: a.controlHeight / 2,
    controlItemBgHover: a.colorFillTertiary,
    controlItemBgActive: a.colorPrimaryBg,
    controlItemBgActiveHover: a.colorPrimaryBgHover,
    controlItemBgActiveDisabled: a.colorFill,
    controlTmpOutline: a.colorFillQuaternary,
    controlOutline: Tt(a.colorPrimaryBg, a.colorBgContainer),
    lineType: a.lineType,
    borderRadius: a.borderRadius,
    borderRadiusXS: a.borderRadiusXS,
    borderRadiusSM: a.borderRadiusSM,
    borderRadiusLG: a.borderRadiusLG,
    fontWeightStrong: 600,
    opacityLoading: 0.65,
    linkDecoration: "none",
    linkHoverDecoration: "none",
    linkFocusDecoration: "none",
    controlPaddingHorizontal: 12,
    controlPaddingHorizontalSM: 8,
    paddingXXS: a.sizeXXS,
    paddingXS: a.sizeXS,
    paddingSM: a.sizeSM,
    padding: a.size,
    paddingMD: a.sizeMD,
    paddingLG: a.sizeLG,
    paddingXL: a.sizeXL,
    paddingContentHorizontalLG: a.sizeLG,
    paddingContentVerticalLG: a.sizeMS,
    paddingContentHorizontal: a.sizeMS,
    paddingContentVertical: a.sizeSM,
    paddingContentHorizontalSM: a.size,
    paddingContentVerticalSM: a.sizeXS,
    marginXXS: a.sizeXXS,
    marginXS: a.sizeXS,
    marginSM: a.sizeSM,
    margin: a.size,
    marginMD: a.sizeMD,
    marginLG: a.sizeLG,
    marginXL: a.sizeXL,
    marginXXL: a.sizeXXL,
    boxShadow: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
    screenXS: i,
    screenXSMin: i,
    screenXSMax: o - 1,
    screenSM: o,
    screenSMMin: o,
    screenSMMax: l - 1,
    screenMD: l,
    screenMDMin: l,
    screenMDMax: u - 1,
    screenLG: u,
    screenLGMin: u,
    screenLGMax: s - 1,
    screenXL: s,
    screenXLMin: s,
    screenXLMax: d - 1,
    screenXXL: d,
    screenXXLMin: d,
    screenXXLMax: f - 1,
    screenXXXL: f,
    screenXXXLMin: f,
    // FIXME: component box-shadow, should be removed
    boxShadowPopoverArrow: "3px 3px 7px rgba(0, 0, 0, 0.1)",
    boxShadowCard: `
      0 1px 2px -2px `.concat(new ae("rgba(0, 0, 0, 0.16)").toRgbString(), `,
      0 3px 6px 0 `).concat(new ae("rgba(0, 0, 0, 0.12)").toRgbString(), `,
      0 5px 12px 4px `).concat(new ae("rgba(0, 0, 0, 0.09)").toRgbString(), `
    `),
    boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
    boxShadowTabsOverflowLeft: "inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowRight: "inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowTop: "inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)",
    boxShadowTabsOverflowBottom: "inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)"
  }, r);
  return h;
}
function Ln() {
  var e = lc(), t = m(function() {
    return "".concat(sc, "-").concat(e.value.hashed || "");
  }), n = m(function() {
    return e.value.theme || ic;
  }), r = Iu(n, m(function() {
    return [Dt, e.value.token];
  }), m(function() {
    return {
      salt: t.value,
      override: H({
        override: e.value.token
      }, e.value.components),
      formatToken: mc
    };
  }));
  return {
    theme: n,
    token: m(function() {
      return r.value[0];
    }),
    hashId: m(function() {
      return e.value.hashed ? r.value[1] : "";
    })
  };
}
const hc = "anticon", gc = Symbol("configProvider"), vc = {
  getPrefixCls: (e, t) => t || (e ? `ant-${e}` : "ant"),
  iconPrefixCls: m(() => hc),
  getPopupContainer: m(() => () => document.body),
  direction: m(() => "ltr")
}, Kt = () => Fe(gc, vc);
function ct(e) {
  "@babel/helpers - typeof";
  return ct = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ct(e);
}
var yc = ["algorithm", "token"];
function Pr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Pt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Pr(Object(n), !0).forEach(function(r) {
      bc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function bc(e, t, n) {
  return t = Sc(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Sc(e) {
  var t = xc(e, "string");
  return ct(t) == "symbol" ? t : String(t);
}
function xc(e, t) {
  if (ct(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ct(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Cc(e, t) {
  if (e == null)
    return {};
  var n = Tc(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Tc(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Pc(e) {
  return m(function() {
    var t = e.value, n = t.algorithm, r = t.token, a = Cc(t, yc), i = n && (!Array.isArray(n) || n.length > 0) ? $a(n) : void 0;
    return Pt(Pt({}, a), {}, {
      theme: i,
      token: Pt(Pt({}, Dt), Ee(r))
    });
  });
}
function st(e) {
  "@babel/helpers - typeof";
  return st = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, st(e);
}
function wr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ve(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? wr(Object(n), !0).forEach(function(r) {
      wc(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : wr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function wc(e, t, n) {
  return t = $c(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function $c(e) {
  var t = Oc(e, "string");
  return st(t) == "symbol" ? t : String(t);
}
function Oc(e, t) {
  if (st(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (st(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Mc(e, t) {
  var n = m(function() {
    return e.value;
  }), r = m(function() {
    return n.value.inherit === !1 || !(t != null && t.value) ? Ha : t.value;
  }), a = m(function() {
    if (!(e != null && e.value))
      return t == null ? void 0 : t.value;
    var i = ve({}, r.value.components);
    return Object.keys(e.value.components || {}).forEach(function(o) {
      i[o] = ve(ve({}, i[o]), e.value.components[o]);
    }), ve(ve(ve({}, r.value), n.value), {}, {
      token: ve(ve({}, r.value.token), n.value.token),
      components: i
    });
  });
  return a;
}
var Ic = ["theme", "direction"];
function Fc(e, t) {
  if (e == null)
    return {};
  var n = jc(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function jc(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var Bc = _({
  props: Vr(),
  setup: function(t, n) {
    var r = n.slots, a = ne(t), i = a.intl, o = a.theme, l = Y(), u = l.getPrefixCls, s = Kt();
    s.theme;
    var d = s.direction, f = Fc(s, Ic), h = m(function() {
      return o.value;
    }), p = Pc(h);
    console.log(p.value);
    var g = m(function() {
      return i.value;
    }), v = function($, C) {
      var j = t.prefix || "maya";
      return C || ($ ? ".".concat(j, "-").concat($) : ".".concat(j));
    };
    return Eo({
      intl: g,
      direction: d,
      theme: h,
      getPrefixCls: t.prefix ? v : u
    }), function() {
      var y, $ = Object.keys(f).reduce(function(C, j) {
        return Object.assign(C, {
          key: _e(f[j])
        });
      }, {});
      return c(Xr, be($, {
        theme: h.value,
        direction: d.value,
        locale: {
          locale: g.value.locale
        }
      }), {
        default: function() {
          return [c(cc, {
            context: p.value
          }, {
            default: function() {
              return [(y = r.default) === null || y === void 0 ? void 0 : y.call(r)];
            }
          })];
        }
      });
    };
  }
});
const Ac = Bc;
function dt(e) {
  "@babel/helpers - typeof";
  return dt = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, dt(e);
}
var kc = ["locale", "theme"];
function $r(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Te(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? $r(Object(n), !0).forEach(function(r) {
      Ec(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : $r(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ec(e, t, n) {
  return t = Rc(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Rc(e) {
  var t = Lc(e, "string");
  return dt(t) == "symbol" ? t : String(t);
}
function Lc(e, t) {
  if (dt(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (dt(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hc(e, t) {
  if (e == null)
    return {};
  var n = Dc(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Dc(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var _c = _({
  name: "MayaConfigProvider",
  props: Vr(),
  setup: function(t, n) {
    var r = n.slots, a = ne(t), i = a.theme, o = a.componentSize, l = a.intl, u = Y(), s = u.theme, d = u.componentSize, f = u.intl, h = Kt(), p = h.locale, g = h.theme, v = Hc(h, kc), y = Mc(i, m(function() {
      return s.value;
    })), $ = m(function() {
      return o.value || (d == null ? void 0 : d.value) || "middle";
    }), C = m(function() {
      var I;
      if (l.value)
        return l.value;
      if (f.value && f.value.locale !== "default")
        return f.value;
      var O = p && ((I = p.value) === null || I === void 0 ? void 0 : I.locale) || "zh-CN";
      return Zr[Fo(O)] || In;
    }), j = m(function() {
      var I = [];
      return y.value.type === "dark" ? I.unshift(Fl) : I.unshift(jn), I;
    }), B = m(function() {
      return Ee(Te(Te(Te({}, Ee(g == null ? void 0 : g.value)), Ee(y.value)), {}, {
        algorithm: j.value,
        token: Te(Te({}, Ee(g == null ? void 0 : g.value.token)), Ee(y.value.token))
      }));
    });
    return function() {
      var I, O = Te(Te({}, Object.keys(v).reduce(function(T, E) {
        return Object.assign(T, {
          key: _e(v[E])
        });
      }, {})), {}, {
        locale: {
          locale: C.value.locale
        },
        theme: B.value,
        componentSize: $.value
      });
      return c(Xr, be(O, {
        getPopupContainer: function() {
          return document.body;
        }
      }), {
        default: function() {
          return [c(Ac, be(t, {
            theme: B.value,
            intl: C.value
          }), {
            default: function() {
              return [r == null || (I = r.default) === null || I === void 0 ? void 0 : I.call(r)];
            }
          })];
        }
      });
    };
  }
});
const _a = _c, za = () => ({
  pure: {
    type: Boolean,
    default: !1
  },
  hasSider: {
    type: Boolean,
    default: !0
  },
  siderWidth: {
    type: Number,
    default: 256
  },
  defaultCollapsed: {
    type: Boolean,
    default: !1
  },
  style: Object,
  menus: Array,
  theme: Object,
  layout: {
    type: String,
    default: "mix"
  },
  title: String,
  logo: [Function, Object],
  siderMenuType: String,
  siderFixed: {
    type: Boolean,
    default: !0
  },
  splitMenus: {
    type: Boolean,
    default: !0
  },
  collapsedShowTitle: {
    type: Boolean,
    default: !1
  },
  loading: Boolean
});
var Or = function() {
  return {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflow: "ellipsis"
  };
}, un = function(t) {
  return {
    // FIXME: This use link but is a operation unit. Seems should be a colorPrimary.
    // And Typography use this to generate link style which should not do this.
    color: t.colorLink,
    outline: "none",
    cursor: "pointer",
    transition: "color ".concat(t.motionDurationSlow),
    "&:focus, &:hover": {
      color: t.colorLinkHover
    },
    "&:active": {
      color: t.colorLinkActive
    }
  };
}, cn = function(t) {
  return {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
    color: t.colorText,
    fontSize: t.fontSize,
    lineHeight: t.lineHeight,
    listStyle: "none"
  };
};
function Q(e, t) {
  var n = Ln(), r = n.token, a = n.hashId, i = n.theme, o = m(function() {
    return {
      theme: i.value,
      token: r.value,
      hashId: a.value,
      path: [e]
    };
  });
  return {
    wrapSSR: rc(o, function() {
      return t(H(H({}, r.value), {}, {
        infraCls: ".ant",
        prefixCls: ".maya"
      }));
    }),
    hashId: a
  };
}
const zc = (e) => ({
  [`${e.infraCls}-layout`]: {
    backgroundColor: "transparent !important"
  },
  [e.componentCls]: {
    [`& ${e.infraCls}-layout`]: {
      display: "flex",
      backgroundColor: "transparent",
      width: "100%"
    },
    [`${e.componentCls}-content`]: {
      display: "flex",
      flexDirection: "column",
      width: "100%",
      backgroundColor: "transparent",
      position: "relative",
      paddingBlock: 32,
      paddingInline: 40,
      "&-has-page-container": {
        padding: 0
      }
    },
    [`${e.componentCls}-container`]: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      minWidth: 0,
      minHeight: 0,
      backgroundColor: "transparent"
    },
    [`${e.componentCls}-bg-list`]: {
      pointerEvents: "none",
      position: "fixed",
      overflow: "hidden",
      insetBlockStart: 0,
      insetInlineStart: 0,
      zIndex: 0,
      height: "100%",
      width: "100%",
      background: e.bgLayout
    }
  }
}), Nc = (e) => {
  const {
    colorBgContainer: t,
    colorBgLayout: n,
    colorTextSecondary: r,
    colorTextBase: a
  } = e;
  return {
    bgLayout: `linear-gradient(${t}, ${n} 28%)`,
    colorTextAppListIcon: r,
    appListIconHoverBgColor: Z(a, 0.04),
    colorBgAppListIconHover: Z(a, 0.04),
    colorTextAppListIconHover: a
  };
};
function Wc(e) {
  return Q("Layout", (t) => [zc({
    ...t,
    ...Nc(t),
    componentCls: e
  })]);
}
var Gc = Symbol("iconContext"), Hn = function() {
  return Fe(Gc, {
    prefixCls: ee("anticon"),
    rootClassName: ee(""),
    csp: ee()
  });
};
function Dn() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
function Uc(e, t) {
  return e && e.contains ? e.contains(t) : !1;
}
var Mr = "data-vc-order", Xc = "vc-icon-key", wn = /* @__PURE__ */ new Map();
function Na() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Xc;
}
function _n(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function Kc(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Wa(e) {
  return Array.from((wn.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Ga(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Dn())
    return null;
  var n = t.csp, r = t.prepend, a = document.createElement("style");
  a.setAttribute(Mr, Kc(r)), n && n.nonce && (a.nonce = n.nonce), a.innerHTML = e;
  var i = _n(t), o = i.firstChild;
  if (r) {
    if (r === "queue") {
      var l = Wa(i).filter(function(u) {
        return ["prepend", "prependQueue"].includes(u.getAttribute(Mr));
      });
      if (l.length)
        return i.insertBefore(a, l[l.length - 1].nextSibling), a;
    }
    i.insertBefore(a, o);
  } else
    i.appendChild(a);
  return a;
}
function Vc(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n = _n(t);
  return Wa(n).find(function(r) {
    return r.getAttribute(Na(t)) === e;
  });
}
function Zc(e, t) {
  var n = wn.get(e);
  if (!n || !Uc(document, n)) {
    var r = Ga("", t), a = r.parentNode;
    wn.set(e, a), e.removeChild(r);
  }
}
function qc(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, r = _n(n);
  Zc(r, n);
  var a = Vc(t, n);
  if (a)
    return n.csp && n.csp.nonce && a.nonce !== n.csp.nonce && (a.nonce = n.csp.nonce), a.innerHTML !== e && (a.innerHTML = e), a;
  var i = Ga(e, n);
  return i.setAttribute(Na(n), t), i;
}
function Ir(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Yc(e, a, n[a]);
    });
  }
  return e;
}
function Yc(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Qc(e, t) {
  process.env.NODE_ENV !== "production" && !e && console !== void 0 && console.error("Warning: ".concat(t));
}
function $n(e, t) {
  Qc(e, "[@ant-design/icons-vue] ".concat(t));
}
function Fr(e) {
  return typeof e == "object" && typeof e.name == "string" && typeof e.theme == "string" && (typeof e.icon == "object" || typeof e.icon == "function");
}
function On(e, t, n) {
  return n ? Zn(e.tag, Ir({
    key: t
  }, n, e.attrs), (e.children || []).map(function(r, a) {
    return On(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  })) : Zn(e.tag, Ir({
    key: t
  }, e.attrs), (e.children || []).map(function(r, a) {
    return On(r, "".concat(t, "-").concat(e.tag, "-").concat(a));
  }));
}
function Ua(e) {
  return Ie(e)[0];
}
function Xa(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
var Jc = {
  width: "1em",
  height: "1em",
  fill: "currentColor",
  "aria-hidden": "true",
  focusable: "false"
}, es = `
.anticon {
  display: inline-block;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`;
function Ka(e) {
  return e && e.getRootNode && e.getRootNode();
}
function ts(e) {
  return Dn() ? Ka(e) instanceof ShadowRoot : !1;
}
function ns(e) {
  return ts(e) ? Ka(e) : null;
}
var rs = function() {
  var t = Hn(), n = t.prefixCls, r = t.csp, a = Se(), i = es;
  n && (i = i.replace(/anticon/g, n.value)), Ur(function() {
    if (Dn()) {
      var o = a.vnode.el, l = ns(o);
      qc(i, "@ant-design-vue-icons", {
        prepend: !0,
        csp: r.value,
        attachTo: l
      });
    }
  });
}, as = ["icon", "primaryColor", "secondaryColor"];
function is(e, t) {
  if (e == null)
    return {};
  var n = os(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function os(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function Ft(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      ls(e, a, n[a]);
    });
  }
  return e;
}
function ls(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var nt = gi({
  primaryColor: "#333",
  secondaryColor: "#E6E6E6",
  calculated: !1
});
function us(e) {
  var t = e.primaryColor, n = e.secondaryColor;
  nt.primaryColor = t, nt.secondaryColor = n || Ua(t), nt.calculated = !!n;
}
function cs() {
  return Ft({}, nt);
}
var Ue = function(t, n) {
  var r = Ft({}, t, n.attrs), a = r.icon, i = r.primaryColor, o = r.secondaryColor, l = is(r, as), u = nt;
  if (i && (u = {
    primaryColor: i,
    secondaryColor: o || Ua(i)
  }), $n(Fr(a), "icon should be icon definiton, but got ".concat(a)), !Fr(a))
    return null;
  var s = a;
  return s && typeof s.icon == "function" && (s = Ft({}, s, {
    icon: s.icon(u.primaryColor, u.secondaryColor)
  })), On(s.icon, "svg-".concat(s.name), Ft({}, l, {
    "data-icon": s.name,
    width: "1em",
    height: "1em",
    fill: "currentColor",
    "aria-hidden": "true"
  }));
};
Ue.props = {
  icon: Object,
  primaryColor: String,
  secondaryColor: String,
  focusable: String
};
Ue.inheritAttrs = !1;
Ue.displayName = "IconBase";
Ue.getTwoToneColors = cs;
Ue.setTwoToneColors = us;
const zn = Ue;
function ss(e, t) {
  return ms(e) || ps(e, t) || fs(e, t) || ds();
}
function ds() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function fs(e, t) {
  if (e) {
    if (typeof e == "string")
      return jr(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return jr(e, t);
  }
}
function jr(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function ps(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, o, l;
    try {
      for (n = n.call(e); !(a = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return r;
  }
}
function ms(e) {
  if (Array.isArray(e))
    return e;
}
function Va(e) {
  var t = Xa(e), n = ss(t, 2), r = n[0], a = n[1];
  return zn.setTwoToneColors({
    primaryColor: r,
    secondaryColor: a
  });
}
function hs() {
  var e = zn.getTwoToneColors();
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor;
}
var Za = _({
  name: "InsertStyles",
  setup: function() {
    return rs(), function() {
      return null;
    };
  }
}), gs = ["class", "icon", "spin", "rotate", "tabindex", "twoToneColor", "onClick"];
function vs(e, t) {
  return xs(e) || Ss(e, t) || bs(e, t) || ys();
}
function ys() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function bs(e, t) {
  if (e) {
    if (typeof e == "string")
      return Br(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (n === "Object" && e.constructor && (n = e.constructor.name), n === "Map" || n === "Set")
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Br(e, t);
  }
}
function Br(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++)
    r[n] = e[n];
  return r;
}
function Ss(e, t) {
  var n = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (n != null) {
    var r = [], a = !0, i = !1, o, l;
    try {
      for (n = n.call(e); !(a = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t)); a = !0)
        ;
    } catch (u) {
      i = !0, l = u;
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i)
          throw l;
      }
    }
    return r;
  }
}
function xs(e) {
  if (Array.isArray(e))
    return e;
}
function Ar(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      et(e, a, n[a]);
    });
  }
  return e;
}
function et(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Cs(e, t) {
  if (e == null)
    return {};
  var n = Ts(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function Ts(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
Va(yl.primary);
var Xe = function(t, n) {
  var r, a = Ar({}, t, n.attrs), i = a.class, o = a.icon, l = a.spin, u = a.rotate, s = a.tabindex, d = a.twoToneColor, f = a.onClick, h = Cs(a, gs), p = Hn(), g = p.prefixCls, v = p.rootClassName, y = (r = {}, et(r, v.value, !!v.value), et(r, g.value, !0), et(r, "".concat(g.value, "-").concat(o.name), !!o.name), et(r, "".concat(g.value, "-spin"), !!l || o.name === "loading"), r), $ = s;
  $ === void 0 && f && ($ = -1);
  var C = u ? {
    msTransform: "rotate(".concat(u, "deg)"),
    transform: "rotate(".concat(u, "deg)")
  } : void 0, j = Xa(d), B = vs(j, 2), I = B[0], O = B[1];
  return c("span", Ar({
    role: "img",
    "aria-label": o.name
  }, h, {
    onClick: f,
    class: [y, i],
    tabindex: $
  }), [c(zn, {
    icon: o,
    primaryColor: I,
    secondaryColor: O,
    style: C
  }, null), c(Za, null, null)]);
};
Xe.props = {
  spin: Boolean,
  rotate: Number,
  icon: Object,
  twoToneColor: [String, Array]
};
Xe.displayName = "AntdIcon";
Xe.inheritAttrs = !1;
Xe.getTwoToneColor = hs;
Xe.setTwoToneColor = Va;
const Nn = Xe;
var Ps = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z" } }] }, name: "arrow-left", theme: "outlined" };
const ws = Ps;
function kr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      $s(e, a, n[a]);
    });
  }
  return e;
}
function $s(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Wn = function(t, n) {
  var r = kr({}, t, n.attrs);
  return c(Nn, kr({}, r, {
    icon: ws
  }), null);
};
Wn.displayName = "ArrowLeftOutlined";
Wn.inheritAttrs = !1;
const Os = Wn;
var Ms = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z" } }] }, name: "arrow-right", theme: "outlined" };
const Is = Ms;
function Er(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Fs(e, a, n[a]);
    });
  }
  return e;
}
function Fs(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Gn = function(t, n) {
  var r = Er({}, t, n.attrs);
  return c(Nn, Er({}, r, {
    icon: Is
  }), null);
};
Gn.displayName = "ArrowRightOutlined";
Gn.inheritAttrs = !1;
const js = Gn, Bs = () => ({
  stylish: Object,
  style: Object
}), de = (e) => {
  const {
    colorBgElevated: t,
    colorTextSecondary: n,
    colorTextBase: r,
    colorText: a,
    colorTextTertiary: i
  } = e;
  return {
    colorBgHeader: Z(t, 0.6),
    colorBgScrollHeader: Z(t, 0.8),
    colorHeaderTitle: a,
    colorBgMenuItemHover: Z(r, 0.03),
    colorBgMenuItemSelected: "transparent",
    colorBgMenuElevated: t,
    colorTextMenuSelected: Z(r, 0.95),
    colorBgRightActionsItemHover: Z(r, 0.03),
    colorTextRightActionsItem: i,
    heightLayoutHeader: 56,
    colorTextMenu: n,
    colorTextMenuSecondary: i,
    colorTextMenuTitle: a,
    colorTextMenuActive: a
  };
}, As = (e) => ({
  [`${e.prefixCls}-layout`]: {
    [`${e.infraCls}-layout-header${e.componentCls}`]: {
      height: e.heightLayoutHeader || 56,
      lineHeight: `${e.heightLayoutHeader || 56}px`,
      zIndex: 19,
      width: "100%",
      paddingBlock: 0,
      paddingInline: 0,
      borderBlockEnd: `1px solid ${e.colorSplit}`,
      backgroundColor: e.colorBgHeader || "rgba(255, 255, 255, 0.4)",
      WebkitBackdropFilter: "blur(8px)",
      backdropFilter: "blur(8px)",
      transition: "background-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)",
      "&-fixed-header": {
        position: "fixed",
        insetBlockStart: 0,
        width: "100%",
        zIndex: 100,
        insetInlineEnd: 0
      },
      "&-fixed-header-scroll": {
        backgroundColor: e.colorBgScrollHeader || "rgba(255, 255, 255, 0.8)"
      },
      "&-header-actions": {
        display: "flex",
        alignItems: "center",
        fontSize: "16",
        cursor: "pointer",
        "& &-item": {
          paddingBlock: 0,
          paddingInline: 8,
          "&:hover": {
            color: e.colorText
          }
        }
      },
      "&-header-realDark": { boxShadow: "0 2px 8px 0 rgba(0, 0, 0, 65%)" },
      "&-header-actions-header-action": {
        transition: "width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)"
      }
    }
  }
}), ks = (e) => ({
  [e.componentCls]: {
    [`${e.infraCls}-menu-item`]: {
      "&:hover": {
        backgroundColor: `${Z(e.colorTextBase, 0.03)} !important`
      }
    },
    [`${e.infraCls}-menu-submenu`]: {
      "&:hover": {
        backgroundColor: `${Z(e.colorTextBase, 0.03)} !important`
      }
    }
  }
});
function Es(e) {
  return Q("LayoutHeader", (t) => {
    const n = {
      ...t,
      ...de(t),
      componentCls: e
    };
    return [As(n), ks(n)];
  });
}
function Rs(e) {
  for (var t = [], n = 0; n < e.length; ) {
    var r = e[n];
    if (r === "*" || r === "+" || r === "?") {
      t.push({
        type: "MODIFIER",
        index: n,
        value: e[n++]
      });
      continue;
    }
    if (r === "\\") {
      t.push({
        type: "ESCAPED_CHAR",
        index: n++,
        value: e[n++]
      });
      continue;
    }
    if (r === "{") {
      t.push({
        type: "OPEN",
        index: n,
        value: e[n++]
      });
      continue;
    }
    if (r === "}") {
      t.push({
        type: "CLOSE",
        index: n,
        value: e[n++]
      });
      continue;
    }
    if (r === ":") {
      for (var a = "", i = n + 1; i < e.length; ) {
        var o = e.charCodeAt(i);
        if (
          // `0-9`
          o >= 48 && o <= 57 || // `A-Z`
          o >= 65 && o <= 90 || // `a-z`
          o >= 97 && o <= 122 || // `_`
          o === 95
        ) {
          a += e[i++];
          continue;
        }
        break;
      }
      if (!a)
        throw new TypeError("Missing parameter name at " + n);
      t.push({
        type: "NAME",
        index: n,
        value: a
      }), n = i;
      continue;
    }
    if (r === "(") {
      var l = 1, u = "", i = n + 1;
      if (e[i] === "?")
        throw new TypeError('Pattern cannot start with "?" at ' + i);
      for (; i < e.length; ) {
        if (e[i] === "\\") {
          u += e[i++] + e[i++];
          continue;
        }
        if (e[i] === ")") {
          if (l--, l === 0) {
            i++;
            break;
          }
        } else if (e[i] === "(" && (l++, e[i + 1] !== "?"))
          throw new TypeError("Capturing groups are not allowed at " + i);
        u += e[i++];
      }
      if (l)
        throw new TypeError("Unbalanced pattern at " + n);
      if (!u)
        throw new TypeError("Missing pattern at " + n);
      t.push({
        type: "PATTERN",
        index: n,
        value: u
      }), n = i;
      continue;
    }
    t.push({
      type: "CHAR",
      index: n,
      value: e[n++]
    });
  }
  return t.push({
    type: "END",
    index: n,
    value: ""
  }), t;
}
function Ls(e, t) {
  t === void 0 && (t = {});
  for (var n = Rs(e), r = t.prefixes, a = r === void 0 ? "./" : r, i = "[^" + Le(t.delimiter || "/#?") + "]+?", o = [], l = 0, u = 0, s = "", d = function(T) {
    if (u < n.length && n[u].type === T)
      return n[u++].value;
  }, f = function(T) {
    var E = d(T);
    if (E !== void 0)
      return E;
    var L = n[u], b = L.type, A = L.index;
    throw new TypeError("Unexpected " + b + " at " + A + ", expected " + T);
  }, h = function() {
    for (var T = "", E; E = d("CHAR") || d("ESCAPED_CHAR"); )
      T += E;
    return T;
  }; u < n.length; ) {
    var p = d("CHAR"), g = d("NAME"), v = d("PATTERN");
    if (g || v) {
      var y = p || "";
      a.indexOf(y) === -1 && (s += y, y = ""), s && (o.push(s), s = ""), o.push({
        name: g || l++,
        prefix: y,
        suffix: "",
        pattern: v || i,
        modifier: d("MODIFIER") || ""
      });
      continue;
    }
    var $ = p || d("ESCAPED_CHAR");
    if ($) {
      s += $;
      continue;
    }
    s && (o.push(s), s = "");
    var C = d("OPEN");
    if (C) {
      var y = h(), j = d("NAME") || "", B = d("PATTERN") || "", I = h();
      f("CLOSE"), o.push({
        name: j || (B ? l++ : ""),
        pattern: j && !B ? i : B,
        prefix: y,
        suffix: I,
        modifier: d("MODIFIER") || ""
      });
      continue;
    }
    f("END");
  }
  return o;
}
function Le(e) {
  return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
function qa(e) {
  return e && e.sensitive ? "" : "i";
}
function Hs(e, t) {
  if (!t)
    return e;
  var n = e.source.match(/\((?!\?)/g);
  if (n)
    for (var r = 0; r < n.length; r++)
      t.push({
        name: r,
        prefix: "",
        suffix: "",
        modifier: "",
        pattern: ""
      });
  return e;
}
function Ds(e, t, n) {
  var r = e.map(function(a) {
    return jt(a, t, n).source;
  });
  return new RegExp("(?:" + r.join("|") + ")", qa(n));
}
function _s(e, t, n) {
  return zs(Ls(e, n), t, n);
}
function zs(e, t, n) {
  n === void 0 && (n = {});
  for (var r = n.strict, a = r === void 0 ? !1 : r, i = n.start, o = i === void 0 ? !0 : i, l = n.end, u = l === void 0 ? !0 : l, s = n.encode, d = s === void 0 ? function(O) {
    return O;
  } : s, f = "[" + Le(n.endsWith || "") + "]|$", h = "[" + Le(n.delimiter || "/#?") + "]", p = o ? "^" : "", g = 0, v = e; g < v.length; g++) {
    var y = v[g];
    if (typeof y == "string")
      p += Le(d(y));
    else {
      var $ = Le(d(y.prefix)), C = Le(d(y.suffix));
      if (y.pattern)
        if (t && t.push(y), $ || C)
          if (y.modifier === "+" || y.modifier === "*") {
            var j = y.modifier === "*" ? "?" : "";
            p += "(?:" + $ + "((?:" + y.pattern + ")(?:" + C + $ + "(?:" + y.pattern + "))*)" + C + ")" + j;
          } else
            p += "(?:" + $ + "(" + y.pattern + ")" + C + ")" + y.modifier;
        else
          p += "(" + y.pattern + ")" + y.modifier;
      else
        p += "(?:" + $ + C + ")" + y.modifier;
    }
  }
  if (u)
    a || (p += h + "?"), p += n.endsWith ? "(?=" + f + ")" : "$";
  else {
    var B = e[e.length - 1], I = typeof B == "string" ? h.indexOf(B[B.length - 1]) > -1 : (
      // tslint:disable-next-line
      B === void 0
    );
    a || (p += "(?:" + h + "(?=" + f + "))?"), I || (p += "(?=" + h + "|" + f + ")");
  }
  return new RegExp(p, qa(n));
}
function jt(e, t, n) {
  return e instanceof RegExp ? Hs(e, t) : Array.isArray(e) ? Ds(e, t, n) : _s(e, t, n);
}
var sn = "routes";
function Ya(e) {
  return e.split("?")[0].split("#")[0];
}
var Ns = function(t) {
  if (!t.startsWith("http"))
    return !1;
  try {
    var n = new URL(t);
    return !!n;
  } catch {
    return !1;
  }
};
function ft(e) {
  "@babel/helpers - typeof";
  return ft = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, ft(e);
}
function Rr(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(a) {
      return Object.getOwnPropertyDescriptor(e, a).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Je(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? Rr(Object(n), !0).forEach(function(r) {
      Ws(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Rr(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function Ws(e, t, n) {
  return t = Gs(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function Gs(e) {
  var t = Us(e, "string");
  return ft(t) == "symbol" ? t : String(t);
}
function Us(e, t) {
  if (ft(e) != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (ft(r) != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
var Xs = function e() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = {};
  return t.forEach(function(r) {
    var a = Je({}, r);
    if (!(!a || !a.key)) {
      !a.children && a[sn] && (a.children = a[sn], delete a[sn]);
      var i = a.children || [];
      n[Ya(a.path || a.key || "/")] = Je({}, a), n[a.key || a.path || "/"] = Je({}, a), i && (n = Je(Je({}, n), e(i)));
    }
  }), n;
}, Ks = function() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], n = arguments.length > 1 ? arguments[1] : void 0, r = arguments.length > 2 ? arguments[2] : void 0;
  return t.filter(function(a) {
    if (a === "/" && n === "/")
      return !0;
    if (a !== "/" && a !== "/*" && a && !Ns(a)) {
      var i = Ya(a);
      try {
        if (r && jt("".concat(i)).test(n) || jt("".concat(i), []).test(n) || jt("".concat(i, "/(.*)")).test(n))
          return !0;
      } catch {
      }
    }
    return !1;
  }).sort(function(a, i) {
    return a === n ? 10 : i === n ? -10 : a.substr(1).split("/").length - i.substr(1).split("/").length;
  });
}, Vs = function(t, n, r, a) {
  var i = Xs(n), o = Object.keys(i), l = Ks(o, t || "/", a);
  return !l || l.length < 1 ? [] : (r || (l = [l[l.length - 1]]), l.map(function(u) {
    var s = i[u] || {
      pro_layout_parentKeys: "",
      key: ""
    }, d = /* @__PURE__ */ new Map(), f = (s.pro_layout_parentKeys || []).map(function(h) {
      return d.has(h) ? null : (d.set(h, !0), i[h]);
    }).filter(function(h) {
      return h;
    });
    return s.key && f.push(s), f;
  }).flat(1));
};
function Zs(e) {
  const t = m(() => (la() && window.location, Vs("/list/sub-page/sub-sub-page2", e, !0))), n = m(() => Array.from(new Set(t.value.map((a) => a.key || a.path || ""))));
  return {
    currentMenu: m(() => {
      const a = t.value.length;
      return t.value[a - 1] || {};
    }),
    matchMenuKeys: n,
    matchMenus: t
  };
}
const Qa = {
  siderWidth: m(() => 256),
  siderFixed: m(() => !0),
  hideSiderContentWhenCollapsed: m(() => !1),
  hasHeader: m(() => !0),
  headerFixed: m(() => !0),
  contentWidthType: m(() => "Fixed"),
  stylish: m(() => ({})),
  /** 全局运行时 */
  isMobile: m(() => !1),
  iconfontUrl: m(() => ""),
  iconPrefix: m(() => "icon-"),
  useLocale: m(() => !0),
  formatMessage: (e) => e.defaultMessage,
  /** 动态渲染 */
  actionsRender: m(() => () => []),
  avatarRender: m(() => () => null),
  titleRender: m(() => () => null),
  // 已测试
  theme: m(() => ({})),
  layout: m(() => "mix"),
  setSiderCollapsed: () => {
  },
  siderCollapsed: m(() => !1),
  shouldSiderRender: m(() => !0),
  shouldHeaderRender: m(() => !0),
  title: m(() => "MayaUI"),
  logo: m(() => null),
  pure: m(() => !1),
  siderMenuType: m(() => "group"),
  screenSize: m(() => null),
  siderMenus: m(() => []),
  headerMenus: m(() => []),
  matchMenuKeys: m(() => []),
  matchMenus: m(() => []),
  pageContainerCounts: m(() => 1),
  registerPageContainer: () => null,
  deregisterPageContainer: () => null,
  footerToolbarCounts: m(() => 1),
  registerFooterToolbar: () => null,
  deregisterFooterToolbar: () => null
}, Ja = Symbol("layoutContextProvider"), U = () => Fe(Ja, Qa), qs = (e) => pt(Ja, e);
function Ys(e, t) {
  const {
    pure: n,
    layout: r,
    theme: a,
    title: i,
    logo: o,
    siderMenuType: l,
    siderFixed: u,
    splitMenus: s,
    menus: d
  } = ne(e), f = ee(!1), { active: h, smaller: p } = ya(), g = m(() => p("lg").value), v = m(() => !n.value && r.value !== "top" && !g.value), y = m(() => !n.value && r.value !== "side" && !g.value), $ = m(() => {
    var E;
    return r.value === "mix" && !g.value && s.value ? (E = d.value) == null ? void 0 : E.map((b) => {
      const { children: A, routes: G, ...V } = b;
      return { ...V };
    }) : [...d.value];
  }), { matchMenuKeys: C, matchMenus: j } = Zs(d.value), B = m(() => {
    var E;
    if (r.value === "mix" && !g.value && s.value) {
      const [L] = C.value;
      return L ? ((E = d.value.find((b) => b.key === L)) == null ? void 0 : E.children) || [] : [];
    }
    return [...d.value];
  }), I = ee(0), O = ee(0), T = {
    ...Qa,
    siderFixed: m(() => u.value),
    siderCollapsed: m(() => f.value),
    setSiderCollapsed: (E) => f.value = E,
    theme: m(() => a.value),
    layout: m(() => r.value),
    shouldSiderRender: v,
    shouldHeaderRender: y,
    isMobile: g,
    title: m(() => i.value),
    logo: m(() => o.value),
    siderMenuType: m(() => l.value),
    screenSize: h(),
    titleRender: m(() => t.title),
    actionsRender: m(() => t.actions),
    avatarRender: m(() => t.avatar),
    headerMenus: $,
    siderMenus: B,
    matchMenuKeys: C,
    matchMenus: j,
    pageContainerCounts: m(() => I.value),
    registerPageContainer: () => I.value++,
    deregisterPageContainer: () => I.value--,
    footerToolbarCounts: m(() => O.value),
    registerFooterToolbar: () => O.value++,
    deregisterFooterToolbar: () => O.value--
  };
  return qs(T), T;
}
const Qs = (e) => ({
  [e.componentCls]: {
    position: "relative",
    width: "100%",
    height: "100%",
    backgroundColor: "transparent",
    ".anticon": {
      color: "inherit"
    },
    "&-main": {
      display: "flex",
      height: "100%",
      paddingInlineStart: "16px",
      "&-left": {
        display: "flex",
        alignItems: "center",
        [`${e.prefixCls}-layout-apps-icon`]: {
          marginInlineEnd: 16,
          marginInlineStart: -8
        }
      }
    },
    "&-wide": {
      maxWidth: 1152,
      margin: "0 auto"
    },
    "&-logo": {
      position: "relative",
      display: "flex",
      height: "100%",
      alignItems: "center",
      overflow: "hidden",
      "> *:first-child": {
        display: "flex",
        alignItems: "center",
        minHeight: "22px",
        fontSize: "22px"
      },
      "> *:first-child > img": {
        display: "inline-block",
        height: "32px",
        verticalAlign: "middle"
      },
      "> *:first-child > h1": {
        display: "inline-block",
        marginBlock: 0,
        marginInline: 0,
        lineHeight: "24px",
        marginInlineStart: 6,
        fontWeight: "600",
        fontSize: "16px",
        color: e.colorHeaderTitle,
        verticalAlign: "top"
      }
    },
    "&-content": {
      minWidth: 0,
      display: "flex",
      alignItems: "center",
      paddingInline: 6,
      paddingBlock: 6,
      lineHeight: `${Math.max(
        (e.heightLayoutHeader || 56) - 12,
        40
      )}px`
    }
  }
});
function Js(e) {
  return Q("LayoutTopNavHeader", (t) => {
    const n = {
      ...t,
      ...de(t),
      componentCls: e
    };
    return [Qs(n)];
  });
}
const ed = () => ({
  position: {
    type: String,
    default: "sider"
  }
}), Rt = /* @__PURE__ */ _({
  name: "LogoTitle",
  props: ed(),
  setup(e) {
    const {
      logo: t,
      title: n,
      layout: r,
      isMobile: a,
      siderCollapsed: i,
      titleRender: o
    } = U(), l = () => typeof t.value == "string" ? c("img", {
      width: "auto",
      height: 22,
      src: t.value,
      alt: "logo"
    }, null) : typeof t.value == "function" ? t.value() : t.value, u = () => c("h1", null, [n.value]);
    return a.value || r.value === "mix" && e.position === "sider" ? null : () => {
      if (i.value && e.position == "sider")
        return c("a", {
          key: "title"
        }, [c(l, null, null)]);
      const s = c("a", {
        key: "title"
      }, [c(l, null, null), c(u, null, null)]);
      return o.value ? o.value({
        logo: t.value,
        title: n.value,
        default: s
      }) : s;
    };
  }
}), td = (e) => ({
  [e.componentCls]: {
    "&-actions": {
      display: "flex",
      height: "100%",
      "&-item": {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        paddingBlock: 0,
        paddingInline: 2,
        color: e.colorTextRightActionsItem,
        fontSize: "16px",
        cursor: "pointer",
        borderRadius: e.borderRadius,
        "> *": {
          paddingInline: 6,
          paddingBlock: 6,
          borderRadius: e.borderRadius,
          "&:hover": {
            backgroundColor: e.colorBgRightActionsItemHover
          }
        }
      },
      "&-avatar": {
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        paddingInlineStart: e.padding,
        paddingInlineEnd: e.padding,
        cursor: "pointer",
        color: e.colorTextRightActionsItem,
        gap: e.marginXS,
        "> div": {
          gap: e.marginXS,
          height: "44px",
          color: e.colorTextRightActionsItem,
          paddingInline: 8,
          paddingBlock: 8,
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          lineHeight: "44px",
          borderRadius: e.borderRadius,
          "&:hover": {
            backgroundColor: e.colorBgRightActionsItemHover
          }
        }
      }
    }
  }
});
function nd(e) {
  return Q("LayoutHeaderActionBar", (t) => [td({
    ...t,
    ...de(t),
    componentCls: e
  })]);
}
const ei = /* @__PURE__ */ _({
  name: "HeaderActionBar",
  setup() {
    const {
      getPrefixCls: e
    } = Y(), t = e("layout-header-action-bar"), {
      wrapSSR: n,
      hashId: r
    } = nd(t), a = m(() => F(t, r.value)), i = ee(null), {
      width: o
    } = va(i), l = U(), {
      actionsRender: u,
      avatarRender: s
    } = l, d = () => {
      const f = F(`${t}-actions`, r.value), h = Jr(u.value && u.value() || []).filter(Boolean);
      return n(c("div", {
        class: f
      }, [h.map((p, g) => {
        var y;
        const v = Ht(p) ? !!((y = p == null ? void 0 : p.props) != null && y["aria-hidden"]) : !1;
        return c("div", {
          key: g,
          class: F(`${t}-actions-item ${r.value}`, {
            [`${t}-actions-item-hover`]: !v
          })
        }, [p]);
      }), s.value && c("span", {
        class: F(`${t}-actions-avatar`, r.value)
      }, [c("div", null, [s.value({
        context: l
      })])])]));
    };
    return () => c("div", {
      class: a.value,
      style: {
        width: o.value || "auto",
        height: "100%"
      }
    }, [c("div", {
      style: {
        height: "100%"
      }
    }, [c("div", {
      ref: i,
      style: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        justifyContent: "flex-end"
      }
    }, [c(d, null, null)])])]);
  }
}), rd = /* @__PURE__ */ _({
  name: "TopNavHeader",
  setup(e, {
    slots: t
  }) {
    const {
      getPrefixCls: n
    } = Y(), {
      layout: r,
      contentWidthType: a
    } = U(), i = n("top-nav-header"), {
      wrapSSR: o,
      hashId: l
    } = Js(i), u = m(() => F(i, l.value, {
      [`${i}-light`]: !0
    })), s = (h, {
      slots: p
    }) => {
      var v;
      const g = F(`${i}-main`, l.value, {
        [`${i}-wide`]: a.value === "Fixed" && r.value === "top"
      });
      return c("div", {
        class: g
      }, [(v = p == null ? void 0 : p.default) == null ? void 0 : v.call(p)]);
    }, d = () => {
      const h = F(`${i}-main-left`, l.value), p = F(`${i}-logo`, l.value);
      return c("div", {
        class: h
      }, [c("div", {
        class: p,
        key: "logo",
        id: "logo"
      }, [c(Rt, null, null)])]);
    }, f = () => {
      var p;
      const h = F(`${i}-content`, l.value);
      return c("div", {
        class: h,
        style: {
          flex: 1
        }
      }, [(p = t == null ? void 0 : t.default) == null ? void 0 : p.call(t)]);
    };
    return () => o(c("div", {
      class: u.value
    }, [c(s, null, {
      default: () => [c(d, null, null), c(f, null, null), c(ei, null, null)]
    })]));
  }
}), ad = (e) => ({
  [e.componentCls]: {
    position: "relative",
    background: "transparent",
    display: "flex",
    alignItems: "center",
    marginBlock: 0,
    marginInline: 16,
    height: e.heightLayoutHeader || 56,
    boxSizing: "border-box",
    "> a": {
      height: "100%"
    },
    [`${e.prefixCls}-layout-apps-icon`]: {
      marginInlineEnd: 16
    },
    "&-collapsed-button": {
      minHeight: "22px",
      color: e.colorHeaderTitle,
      fontSize: "18px",
      marginInlineEnd: "16px"
    },
    "&-logo": {
      position: "relative",
      marginInlineEnd: "16px",
      a: {
        display: "flex",
        alignItems: "center",
        height: "100%",
        minHeight: "22px",
        fontSize: "20px"
      },
      img: { height: "28px" },
      h1: {
        height: "32px",
        marginBlock: 0,
        marginInline: 0,
        marginInlineStart: 8,
        fontWeight: "600",
        color: e.colorHeaderTitle || e.colorTextHeading,
        fontSize: "18px",
        lineHeight: "32px"
      },
      "&-mix": {
        display: "flex",
        alignItems: "center"
      }
    },
    "&-logo-mobile": {
      minWidth: "24px",
      marginInlineEnd: 0
    }
  }
});
function id(e) {
  return Q("LayoutGlobalHeader", (t) => [ad({
    ...t,
    ...de(t),
    componentCls: e
  })]);
}
var od = { icon: { tag: "svg", attrs: { viewBox: "64 64 896 896", focusable: "false" }, children: [{ tag: "path", attrs: { d: "M904 160H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0 624H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8zm0-312H120c-4.4 0-8 3.6-8 8v64c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-64c0-4.4-3.6-8-8-8z" } }] }, name: "menu", theme: "outlined" };
const ld = od;
function Lr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      ud(e, a, n[a]);
    });
  }
  return e;
}
function ud(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
var Un = function(t, n) {
  var r = Lr({}, t, n.attrs);
  return c(Nn, Lr({}, r, {
    icon: ld
  }), null);
};
Un.displayName = "MenuOutlined";
Un.inheritAttrs = !1;
const cd = Un;
var sd = ["class", "component", "viewBox", "spin", "rotate", "tabindex", "onClick"];
function wt(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      Bt(e, a, n[a]);
    });
  }
  return e;
}
function Bt(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function dd(e, t) {
  if (e == null)
    return {};
  var n = fd(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function fd(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var Vt = function(t, n) {
  var r, a = n.attrs, i = n.slots, o = wt({}, t, a), l = o.class, u = o.component, s = o.viewBox, d = o.spin, f = o.rotate, h = o.tabindex, p = o.onClick, g = dd(o, sd), v = Hn(), y = v.prefixCls, $ = v.rootClassName, C = i.default && i.default(), j = C && C.length, B = i.component;
  $n(!!(u || j || B), "Should have `component` prop/slot or `children`.");
  var I = (r = {}, Bt(r, $.value, !!$.value), Bt(r, y.value, !0), r), O = Bt({}, "".concat(y.value, "-spin"), d === "" || !!d), T = f ? {
    msTransform: "rotate(".concat(f, "deg)"),
    transform: "rotate(".concat(f, "deg)")
  } : void 0, E = wt({}, Jc, {
    viewBox: s,
    class: O,
    style: T
  });
  s || delete E.viewBox;
  var L = function() {
    return u ? c(u, E, {
      default: function() {
        return [C];
      }
    }) : B ? B(E) : j ? ($n(!!s || C.length === 1 && C[0] && C[0].type === "use", "Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon."), c("svg", wt({}, E, {
      viewBox: s
    }), [C])) : null;
  }, b = h;
  return b === void 0 && p && (b = -1, g.tabindex = b), c("span", wt({
    role: "img"
  }, g, {
    onClick: p,
    class: [I, l]
  }), [L(), c(Za, null, null)]);
};
Vt.props = {
  spin: Boolean,
  rotate: Number,
  viewBox: String,
  ariaLabel: String
};
Vt.inheritAttrs = !1;
Vt.displayName = "Icon";
const pd = Vt;
var md = ["type"];
function Hr(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? Object(arguments[t]) : {}, r = Object.keys(n);
    typeof Object.getOwnPropertySymbols == "function" && (r = r.concat(Object.getOwnPropertySymbols(n).filter(function(a) {
      return Object.getOwnPropertyDescriptor(n, a).enumerable;
    }))), r.forEach(function(a) {
      hd(e, a, n[a]);
    });
  }
  return e;
}
function hd(e, t, n) {
  return t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[t] = n, e;
}
function gd(e, t) {
  if (e == null)
    return {};
  var n = vd(e, t), r, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      r = i[a], !(t.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
  }
  return n;
}
function vd(e, t) {
  if (e == null)
    return {};
  var n = {}, r = Object.keys(e), a, i;
  for (i = 0; i < r.length; i++)
    a = r[i], !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
var ti = /* @__PURE__ */ new Set();
function yd(e) {
  return typeof e == "string" && e.length && !ti.has(e);
}
function Lt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = e[t];
  if (yd(n)) {
    var r = document.createElement("script");
    r.setAttribute("src", n), r.setAttribute("data-namespace", n), e.length > t + 1 && (r.onload = function() {
      Lt(e, t + 1);
    }, r.onerror = function() {
      Lt(e, t + 1);
    }), ti.add(n), document.body.appendChild(r);
  }
}
function bd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.scriptUrl, n = e.extraCommonProps, r = n === void 0 ? {} : n;
  typeof document < "u" && typeof window < "u" && typeof document.createElement == "function" && (Array.isArray(t) ? Lt(t.reverse()) : Lt([t]));
  var a = function(o, l) {
    var u = l.attrs, s = l.slots, d = Hr({}, o, u), f = d.type, h = gd(d, md), p = s.default && s.default(), g = null;
    f && (g = c("use", {
      "xlink:href": "#".concat(f)
    }, null)), p && p.length && (g = p);
    var v = Hr({}, r, h);
    return c(pd, v, {
      default: function() {
        return [g];
      }
    });
  };
  return a.props = {
    spin: Boolean,
    rotate: Number,
    type: String
  }, a.inheritAttrs = !1, a.displayName = "Iconfont", a;
}
const Sd = /* @__PURE__ */ _({
  name: "GlobalHeader",
  setup(e, {
    slots: t
  }) {
    const {
      getPrefixCls: n
    } = Y(), {
      isMobile: r,
      setSiderCollapsed: a,
      siderCollapsed: i,
      layout: o
    } = U(), {
      direction: l
    } = Kt(), u = n("global-header"), {
      wrapSSR: s,
      hashId: d
    } = id(u), f = m(() => F(u, d.value, {})), h = () => {
      if (!r.value)
        return null;
      const g = F(`${u}-collapse-button`, d.value);
      return c("span", {
        class: g,
        onClick: () => {
          a == null || a(!i.value);
        }
      }, [c(cd, null, null)]);
    }, p = () => {
      const g = F(`${u}-logo`, d.value, {
        [`${u}-logo-rtl`]: l.value === "rtl",
        [`${u}-logo-mix`]: o.value === "mix",
        [`${u}-logo-mobile`]: r.value
      });
      if (r.value)
        return c("span", {
          class: g,
          key: "logo"
        }, [c("a", null, [c(Rt, null, null)])]);
      if (o.value === "mix")
        return c("div", {
          class: g
        }, [c(Rt, {
          position: "header"
        }, null)]);
    };
    return () => {
      var g;
      return s(c("div", {
        class: f.value
      }, [c(h, null, null), c(p, null, null), c("div", {
        style: {
          flex: 1
        }
      }, [(g = t.default) == null ? void 0 : g.call(t)]), c(ei, null, null)]));
    };
  }
});
function xd(e, {
  stylish: t,
  collapsedWidth: n
}) {
  return Q("LayoutHeaderStylish", (r) => {
    const a = {
      ...r,
      componentCls: e,
      collapsedWidth: n
    };
    return t ? [
      {
        [`div${r.prefixCls}-layout`]: {
          [`${a.componentCls}`]: t == null ? void 0 : t(a)
        }
      }
    ] : [];
  });
}
function Dr(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ht(e);
}
const Cd = /* @__PURE__ */ _({
  name: "LayoutHeader",
  inheritAttrs: !1,
  props: Bs(),
  setup(e, {
    slots: t
  }) {
    const {
      stylish: n,
      style: r
    } = e, {
      getPrefixCls: a
    } = Y(), {
      headerFixed: i,
      layout: o,
      isMobile: l,
      siderCollapsed: u
    } = U(), s = m(() => i.value || o.value === "mix"), d = a("layout-header"), {
      wrapSSR: f,
      hashId: h
    } = Es(d), p = xd(`${d}.${d}-stylish`, {
      collapsedWidth: 64,
      stylish: n
    }), {
      token: g
    } = Ln(), v = m(() => de(g.value)), y = m(() => F(d, h.value, {
      [`${d}-fixed-header`]: s.value,
      // [`${componentCls}-fixed-header-scroll`]: isFixedHeaderScroll,
      [`${d}-mix`]: o.value === "mix",
      [`${d}-fixed-header-action`]: !u.value,
      [`${d}-top-menu`]: o.value === "top",
      [`${d}-header`]: !0,
      [`${d}-stylish`]: !!n
    })), $ = () => {
      var j;
      const C = (j = t.default) == null ? void 0 : j.call(t);
      return o.value === "top" && !l.value ? c(rd, null, Dr(C) ? C : {
        default: () => [C]
      }) : c(Sd, null, Dr(C) ? C : {
        default: () => [C]
      });
    };
    return () => p.wrapSSR(f(c(At, null, [s.value && c(ze.Header, {
      style: {
        height: v.value.heightLayoutHeader || 56,
        lineHeight: `${v.value.heightLayoutHeader || 56}px`,
        backgroundColor: "transparent",
        zIndex: 19,
        ...r
      }
    }, null), c(ze.Header, {
      class: y.value,
      style: r
    }, {
      default: () => [c($, null, null)]
    })])));
  }
}), ni = () => ({
  breakpoint: [String, Boolean],
  style: Object
}), _r = new ac("badgeLoadingCircle", {
  "0%": {
    display: "none",
    opacity: 0,
    overflow: "hidden"
  },
  "80%": {
    overflow: "hidden"
  },
  "100%": {
    display: "unset",
    opacity: 1
  }
}), Xn = (e) => {
  const {
    colorBgElevated: t,
    colorTextSecondary: n,
    colorTextBase: r,
    colorText: a,
    colorTextTertiary: i
  } = e;
  return {
    paddingInlineLayoutMenu: 8,
    paddingBlockLayoutMenu: 0,
    colorBgCollapsedButton: t,
    colorTextCollapsedButtonHover: n,
    colorTextCollapsedButton: Z(r, 0.25),
    colorMenuBackground: "transparent",
    colorMenuItemDivider: Z(r, 0.06),
    colorBgMenuItemHover: Z(r, 0.03),
    colorBgMenuItemSelected: Z(r, 0.04),
    colorTextMenuItemHover: a,
    colorTextMenuSelected: Z(r, 0.95),
    colorTextMenuActive: a,
    colorTextMenu: n,
    colorTextMenuSecondary: i,
    colorTextMenuTitle: a,
    colorTextSubMenuSelected: Z(r, 0.95)
  };
}, Td = (e) => ({
  [`${e.prefixCls}-layout`]: {
    [`${e.infraCls}-layout-sider${e.componentCls}`]: {
      background: e.colorMenuBackground || "transparent"
    },
    [e.componentCls]: {
      position: "relative",
      boxSizing: "border-box",
      "&-menu": {
        position: "relative",
        zIndex: 10,
        minHeight: "100%"
      },
      [`& ${e.infraCls}-layout-sider-children`]: {
        position: "relative",
        display: "flex",
        flexDirection: "column",
        height: "100%",
        paddingInline: e.paddingInlineLayoutMenu,
        paddingBlock: e.paddingBlockLayoutMenu,
        borderInlineEnd: `1px solid ${e.colorSplit}`,
        marginInlineEnd: -1
      },
      [`${e.infraCls}-menu`]: {
        [`${e.infraCls}-menu-item-group-title`]: {
          fontSize: e.fontSizeSM,
          paddingBottom: 4
        },
        [`${e.infraCls}-menu-item:hover`]: {
          color: e.colorTextMenuItemHover
        }
      },
      "&-header": {
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingInline: 12,
        paddingBlock: 16,
        color: e.colorTextMenu,
        cursor: "pointer",
        borderBlockEnd: `1px solid ${e.colorMenuItemDivider}`,
        "> a": {
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          minHeight: 22,
          fontSize: 22,
          "> img": {
            display: "inline-block",
            height: 22,
            verticalAlign: "middle"
          },
          "> h1": {
            display: "inline-block",
            height: 22,
            marginBlock: 0,
            marginInlineEnd: 0,
            marginInlineStart: 6,
            color: e.colorTextMenuTitle,
            animationName: _r,
            animationDuration: ".4s",
            animationTimingFunction: "ease",
            fontWeight: 600,
            fontSize: 16,
            lineHeight: "22px",
            verticalAlign: "middle"
          }
        },
        "&-collapsed": {
          flexDirection: "column-reverse",
          margin: 0,
          padding: 12,
          [`${e.prefixCls}-layout-apps-icon`]: {
            marginBlockEnd: 8,
            fontSize: 16,
            transition: "font-size 0.2s ease-in-out,color 0.2s ease-in-out"
          }
        }
      },
      "&-actions": {
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginBlock: 4,
        marginInline: 0,
        color: e.colorTextMenu,
        "&-collapsed": {
          flexDirection: "column-reverse",
          paddingBlock: 0,
          paddingInline: 8,
          fontSize: 16,
          transition: "font-size 0.3s ease-in-out"
        },
        "&-list": {
          color: e.colorTextMenuSecondary,
          "&-collapsed": {
            marginBlockEnd: 8,
            animationName: "none"
          },
          "&-item": {
            paddingInline: 6,
            paddingBlock: 6,
            lineHeight: "16px",
            fontSize: 16,
            cursor: "pointer",
            borderRadius: e.borderRadius,
            "&:hover": {
              background: e.colorBgTextHover
            }
          }
        },
        "&-avatar": {
          fontSize: 14,
          paddingInline: 8,
          paddingBlock: 8,
          display: "flex",
          alignItems: "center",
          gap: e.marginXS,
          borderRadius: e.borderRadius,
          "& *": {
            cursor: "pointer"
          },
          "&:hover": {
            background: e.colorBgTextHover
          }
        }
      },
      "&-hide-menu-collapsed": {
        insetInlineStart: `-${e.collapsedWidth - 12}px`,
        position: "absolute"
      },
      "&-extra": {
        marginBlockEnd: 16,
        marginBlock: 0,
        marginInline: 16,
        "&-no-header": {
          marginBlockStart: 16
        }
      },
      "&-links": {
        width: "100%",
        ul: {
          height: "auto"
        }
      },
      "&-link-menu": {
        border: "none",
        boxShadow: "none",
        background: "transparent"
      },
      "&-footer": {
        color: e.colorTextMenuSecondary,
        paddingBlockEnd: 16,
        fontSize: e.fontSize,
        animationName: _r,
        animationDuration: ".4s",
        animationTimingFunction: "ease"
      }
    },
    [`${e.componentCls}${e.componentCls}-fixed`]: {
      position: "fixed",
      insetBlockStart: 0,
      insetInlineStart: 0,
      zIndex: "100",
      height: "100%",
      "&-mix": {
        height: `calc(100% - ${e.heightLayoutHeader || 56}px)`,
        insetBlockStart: `${e.heightLayoutHeader || 56}px`
      }
    }
  }
});
function Pd(e, {
  collapsedWidth: t
}) {
  return Q("LayoutSider", (n) => {
    const r = {
      ...n,
      ...de(n),
      ...Xn(n),
      componentCls: e,
      collapsedWidth: t
    };
    return [Td(r)];
  });
}
function wd(e, {
  collapsedWidth: t,
  stylish: n
}) {
  return Q("LayoutSiderStylish", (r) => {
    const a = {
      ...r,
      ...de(r),
      ...Xn(r),
      componentCls: e,
      collapsedWidth: t
    };
    return n ? [
      {
        [`div${r.prefixCls}-layout`]: {
          [`${a.componentCls}`]: n == null ? void 0 : n(a)
        }
      }
    ] : [];
  });
}
const $d = (e) => ({
  [e.componentCls]: {
    position: "absolute",
    insetBlockStart: "18px",
    zIndex: "101",
    width: "24px",
    height: "24px",
    fontSize: ["14px", "16px"],
    textAlign: "center",
    borderRadius: "40px",
    insetInlineEnd: "-13px",
    transition: "transform 0.3s",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    color: e.colorTextCollapsedButton,
    backgroundColor: e.colorBgCollapsedButton,
    boxShadow: "0 2px 8px -2px rgba(0,0,0,0.05), 0 1px 4px -1px rgba(25,15,15,0.07), 0 0 1px 0 rgba(0,0,0,0.08)",
    "&:hover": {
      color: e.colorTextCollapsedButtonHover,
      boxShadow: "0 4px 16px -4px rgba(0,0,0,0.05), 0 2px 8px -2px rgba(25,15,15,0.07), 0 1px 2px 0 rgba(0,0,0,0.08)"
    },
    ".anticon": {
      fontSize: "14px"
    },
    "& > svg": {
      transition: "transform  0.3s",
      transform: "rotate(90deg)"
    },
    "&-collapsed": {
      "& > svg": {
        transform: "rotate(-90deg)"
      }
    }
  }
});
function Od(e) {
  return Q("LayoutCollapseToggle", (t) => [$d({
    ...t,
    ...Xn(t),
    componentCls: e
  })]);
}
function Md() {
  return c("svg", {
    width: "1em",
    height: "1em",
    viewBox: "0 0 12 12",
    fill: "currentColor",
    "aria-hidden": "true"
  }, [c("path", {
    d: "M6.432 7.967a.448.448 0 01-.318.133h-.228a.46.46 0 01-.318-.133L2.488 4.85a.305.305 0 010-.43l.427-.43a.293.293 0 01.42 0L6 6.687l2.665-2.699a.299.299 0 01.426 0l.42.431a.305.305 0 010 .43L6.432 7.967z"
  }, null)]);
}
const Id = /* @__PURE__ */ _({
  name: "LayoutCollapseToggle",
  setup() {
    const {
      getPrefixCls: e
    } = Y(), {
      isMobile: t,
      siderCollapsed: n,
      setSiderCollapsed: r
    } = U(), a = e("layout-collapse-toggle"), {
      wrapSSR: i,
      hashId: o
    } = Od(a), l = m(() => F(o.value, a, {
      [`${a}-collapsed`]: n.value,
      [`${a}-is-mobile`]: t.value
    }));
    return () => i(c("div", {
      class: l.value,
      onClick: () => r(!n.value)
    }, [c(Md, null, null)]));
  }
});
function Fd(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ht(e);
}
const jd = (e) => {
  const {
    baseClassName: t,
    hashId: n
  } = e, r = U(), {
    actionsRender: a,
    avatarRender: i,
    siderCollapsed: o,
    isMobile: l,
    layout: u
  } = r;
  if (!m(() => !(l.value || u.value === "mix")).value || !a.value && !i.value)
    return null;
  const d = m(() => F(n, `${t}-actions`, {
    [`${t}-actions-collapsed`]: o.value
  })), f = () => {
    let p;
    if (!a.value)
      return null;
    const g = F(`${t}-actions-list`, n, {
      [`${t}-actions-list-collapsed`]: o.value
    }), v = Jr(a.value && a.value() || []).filter(Boolean);
    return c(Kr, {
      align: "center",
      size: 4,
      direction: o.value ? "vertical" : "horizontal",
      class: g
    }, Fd(p = v.map((y, $) => c("div", {
      key: $,
      class: F(`${t}-actions-list-item`)
    }, [y]))) ? p : {
      default: () => [p]
    });
  }, h = () => {
    if (!i.value)
      return null;
    const p = F(`${t}-actions-avatar`), g = i.value({
      context: r
    });
    return c("div", {
      class: p
    }, [g]);
  };
  return c("div", {
    class: d.value
  }, [c(h, null, null), c(f, null, null)]);
}, Bd = /* @__PURE__ */ _({
  name: "LayoutSider",
  inheritAttrs: !1,
  props: ni(),
  slots: Object,
  setup(e, {
    slots: t
  }) {
    const {
      style: n,
      breakpoint: r
    } = e, {
      getPrefixCls: a
    } = Y(), {
      isMobile: i,
      siderFixed: o,
      siderCollapsed: l,
      layout: u,
      theme: s,
      stylish: d,
      setSiderCollapsed: f,
      hideSiderContentWhenCollapsed: h
    } = U(), p = a("layout-sider"), g = 64, v = 256, y = m(() => h.value && l.value), {
      wrapSSR: $,
      hashId: C
    } = wd(`${p}.${p}-stylish`, {
      stylish: d.value.sider,
      collapsedWidth: g
    }), j = m(() => F(C.value, p, {
      [`${p}-fixed`]: o.value,
      [`${p}-fixed-mix`]: u.value === "mix" && !i.value && o.value,
      [`${p}-collapsed`]: l.value,
      [`${p}-layout-${u}`]: u.value && !i.value,
      [`${p}-light`]: s.value.type !== "dark",
      [`${p}-mix`]: u.value === "mix" && !i.value,
      [`${p}-stylish`]: !!d.value.sider
    })), B = (b) => {
      i.value || f == null || f(b);
    };
    function I() {
      if (!t.header || u.value === "mix")
        return null;
      const b = F(C.value, `${p}-header`, {
        [`${p}-header-collapsed`]: l.value
      });
      return c("div", {
        class: b,
        id: "logo"
      }, [t.header()]);
    }
    function O() {
      if (!t.extra)
        return null;
      const b = F(C.value, `${p}-extra`, {
        [`${p}-extra-no-header`]: !t.header
      });
      return c("div", {
        class: b
      }, [t.extra()]);
    }
    function T() {
      if (!t.footer)
        return null;
      const b = F(C.value, `${p}-footer`, {
        [`${p}-footer-collapsed`]: l.value
      });
      return c("div", {
        class: b
      }, [t.footer()]);
    }
    function E() {
      var b;
      return c(At, null, [c(I, null, null), c(O, null, null), c("div", {
        style: {
          flex: 1,
          overflowY: "auto",
          overflowX: "hidden"
        }
      }, [(b = t.default) == null ? void 0 : b.call(t)]), c(jd, {
        baseClassName: p,
        hashId: C.value
      }, null), c(T, null, null)]);
    }
    const L = m(() => {
      const b = l.value ? g : v;
      return {
        width: b,
        overflow: "hidden",
        flex: `0 0 ${b}px`,
        maxWidth: b,
        minWidth: b,
        transition: "all 0.2s ease 0s",
        ...n
      };
    });
    return () => {
      var b;
      return $(c(At, null, [o.value && !i.value && c("div", {
        style: L.value
      }, null), c(ze.Sider, {
        collapsible: !0,
        trigger: null,
        collapsed: l.value,
        breakpoint: r === !1 ? void 0 : r,
        onCollapse: B,
        collapsedWidth: g,
        style: n,
        theme: (b = s.value) == null ? void 0 : b.type,
        width: v,
        class: j.value
      }, {
        default: () => [y.value ? c("div", {
          class: `${p}-hide-when-collapsed ${C.value}`.trim(),
          style: {
            height: "100%",
            width: "100%",
            opacity: y.value ? 0 : 1
          }
        }, [c(E, null, null)]) : c(E, null, null), c(Id, null, null)]
      })]));
    };
  }
}), Ad = /* @__PURE__ */ _({
  name: "LayoutSiderWrapper",
  props: ni(),
  slots: Object,
  setup(e, {
    slots: t
  }) {
    const {
      getPrefixCls: n
    } = Y(), r = n("layout-sider"), {
      wrapSSR: a,
      hashId: i
    } = Pd(r, {
      collapsedWidth: 64
    }), o = m(() => F(i.value, r));
    return () => a(c(Bd, be({
      class: o.value
    }, e), t));
  }
}), kd = /* @__PURE__ */ _({
  name: "ErrorBoundary",
  setup(e, {
    slots: t
  }) {
    return () => {
      var n;
      return (n = t.default) == null ? void 0 : n.call(t);
    };
  }
}), ri = () => ({
  style: Object
}), Ed = /* @__PURE__ */ _({
  name: "LayoutContent",
  inheritAttrs: !1,
  props: ri(),
  setup(e, {
    slots: t
  }) {
    const {
      style: n
    } = e, {
      getPrefixCls: r
    } = Y(), a = r("layout-content"), {
      hasHeader: i,
      pageContainerCounts: o
    } = U(), l = m(() => F(a, {
      [`${a}-has-header`]: i.value,
      [`${a}-has-page-container`]: o.value > 0
    }));
    return () => c(kd, null, {
      default: () => [c(ze.Content, {
        class: l.value,
        style: n
      }, {
        default: () => {
          var u;
          return [(u = t == null ? void 0 : t.default) == null ? void 0 : u.call(t)];
        }
      })]
    });
  }
}), ai = (e) => c("div", {
  style: {
    paddingBlockStart: 100,
    textAlign: "center"
  }
}, [c(yi, be({
  size: "large"
}, e), null)]), Rd = () => ({
  className: String,
  style: Object,
  /**
   * @name 菜单聚合的模式
   */
  type: String,
  splitMenus: Boolean,
  collapsed: Boolean,
  data: Array,
  mode: String,
  openKeys: [Array, Boolean],
  onOpenChange: Function,
  menuProps: Object,
  defaultOpenAll: {
    type: Boolean,
    default: !0
  },
  selectedKeys: Array,
  onSelectionChange: Function,
  autoClose: Boolean,
  ignoreFlatMenu: Boolean,
  loading: Boolean,
  matchMenuKeys: Array
}), Ld = () => ({
  originCollapsed: Boolean,
  menuRenderType: String
}), Hd = (e) => {
  const {
    mode: t
  } = e;
  return c("div", {
    style: t != null && t.includes("inline") ? {
      padding: 24
    } : {
      marginBlockStart: 16
    }
  }, [c(bi, {
    active: !0,
    title: !1,
    paragraph: {
      rows: t != null && t.includes("inline") ? 6 : 1
    }
  }, null)]);
}, dn = (e, t) => ({
  [`${e.componentCls}`]: {
    background: "transparent",
    color: `${e == null ? void 0 : e.colorTextMenu} !important`,
    border: "none",
    [`${e.componentCls}-menu-item`]: {
      transition: "none !important"
    },
    [`${e.componentCls}-submenu-has-icon`]: {
      [`> ${e.infraCls}-menu-sub`]: {
        paddingInlineStart: 10
      }
    },
    [`${e.infraCls}-menu-title-content`]: {
      width: "100%",
      height: "100%",
      display: "inline-flex"
    },
    [`${e.infraCls}-menu-title-content`]: {
      "&:first-child": {
        width: "100%"
      }
    },
    [`${e.componentCls}-item-icon`]: {
      display: "flex",
      alignItems: "center"
    },
    "&&-collapsed": {
      [`${e.infraCls}-menu-item, 
              ${e.infraCls}-menu-item-group > ${e.infraCls}-menu-item-group-list > ${e.infraCls}-menu-item, 
              ${e.infraCls}-menu-item-group > ${e.infraCls}-menu-item-group-list > ${e.infraCls}-menu-submenu > ${e.infraCls}-menu-submenu-title, 
              ${e.infraCls}-menu-submenu > ${e.infraCls}-menu-submenu-title`]: {
        paddingInline: "0 !important",
        marginBlock: "4px !important"
      },
      [`${e.infraCls}-menu-item-group > ${e.infraCls}-menu-item-group-list > ${e.infraCls}-menu-submenu-selected > ${e.infraCls}-menu-submenu-title, 
              ${e.infraCls}-menu-submenu-selected > ${e.infraCls}-menu-submenu-title`]: {
        backgroundColor: e == null ? void 0 : e.colorBgMenuItemSelected,
        borderRadius: e.borderRadiusLG
      },
      [`${e.componentCls}-group`]: {
        [`${e.infraCls}-menu-item-group-title`]: {
          paddingInline: 0
        }
      }
    },
    "&-item-title": {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: e.marginXS,
      [`${e.componentCls}-item-text`]: {
        maxWidth: "100%",
        textOverflow: "ellipsis",
        overflow: "hidden",
        wordBreak: "break-all",
        whiteSpace: "nowrap"
      },
      "&-collapsed": {
        minWidth: 40,
        height: 40,
        [`${e.componentCls}-item-icon`]: {
          height: "16px",
          width: "16px",
          lineHeight: "16px !important",
          ".anticon": {
            lineHeight: "16px !important",
            height: "16px"
          }
        },
        [`${e.componentCls}-item-text-has-icon`]: {
          display: "none !important"
        }
      },
      "&-collapsed-level-0": {
        flexDirection: "column",
        justifyContent: "center"
      },
      [`&${e.componentCls}-group-item-title`]: {
        gap: e.marginXS,
        height: 18,
        overflow: "hidden"
      },
      [`&${e.componentCls}-item-collapsed-show-title`]: {
        lineHeight: "16px",
        gap: 0,
        [`&${e.componentCls}-item-title-collapsed`]: {
          display: "flex",
          [`${e.componentCls}-item-icon`]: {
            height: "16px",
            width: "16px",
            lineHeight: "16px !important",
            ".anticon": {
              lineHeight: "16px!important",
              height: "16px"
            }
          },
          [`${e.componentCls}-item-text`]: {
            opacity: "1 !important",
            display: "inline !important",
            textAlign: "center",
            fontSize: 12,
            height: 12,
            lineHeight: "12px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            width: "100%",
            margin: 0,
            padding: 0,
            marginBlockStart: 4
          }
        }
      }
    },
    "&-group": {
      [`${e.infraCls}-menu-item-group-title`]: {
        fontSize: 12,
        color: e.colorTextLabel,
        ".anticon": {
          marginInlineEnd: 8
        }
      }
    },
    "&-group-divider": {
      color: e.colorTextSecondary,
      fontSize: 12,
      lineHeight: 20
    }
  },
  ...t === "horizontal" ? {} : {
    [`${e.infraCls}-menu-submenu${e.infraCls}-menu-submenu-popup`]: {
      [`${e.componentCls}-item-title`]: {
        alignItems: "flex-start"
      }
    }
  },
  [`${e.infraCls}-menu-submenu-popup`]: {
    backgroundColor: "rgba(255, 255, 255, 0.42)",
    "-webkit-backdrop-filter": "blur(8px)",
    backdropFilter: "blur(8px)"
  }
});
function Dd(e) {
  return Q("LayoutMenu", (t) => [dn({
    ...t,
    ...de(t),
    componentCls: `${e}-horizontal`
  }, "horizontal"), dn({
    ...t,
    ...de(t),
    componentCls: `${e}-vertical`
  }, "vertical"), dn({
    ...t,
    ...de(t),
    componentCls: `${e}-inline`
  }, "inline")]);
}
const ii = Symbol("layoutMenuContextProvider");
function je() {
  return Fe(ii);
}
function _d(e) {
  return pt(ii, e);
}
const Ke = () => ({
  level: Number,
  noGroupLevel: Number,
  icon: [Object, String],
  children: Array,
  locale: [String, Boolean],
  name: String,
  disabled: Boolean,
  path: String
}), zd = () => ({
  className: String,
  icon: [String, Object],
  iconPrefix: {
    type: String,
    default: "icon-"
  }
}), Nd = /* @__PURE__ */ _({
  name: "Icon",
  props: zd(),
  setup(e) {
    const {
      className: t,
      icon: n,
      iconPrefix: r
    } = e, {
      iconfontUrl: a
    } = U(), i = m(() => bd({
      scriptUrl: a.value
    }));
    return () => {
      if (typeof n == "string" && n !== "") {
        if (ea(n) || Qo(n))
          return c("img", {
            class: t,
            width: 16,
            key: n,
            src: n,
            alt: "icon"
          }, null);
        if (n.startsWith(r)) {
          const o = i.value;
          return c(o, {
            type: n
          }, null);
        }
      }
      return n;
    };
  }
});
function Wd(e) {
  return e && typeof e == "string" ? e.substring(0, 1).toUpperCase() : null;
}
const Gd = /* @__PURE__ */ _({
  name: "MenuItemIcon",
  props: Ke(),
  setup(e) {
    const {
      name: t,
      icon: n
    } = e, {
      shouldHasIcon: r,
      baseClassName: a,
      collapsed: i,
      hashId: o
    } = je(), {
      iconPrefix: l
    } = U(), u = m(() => {
      var p;
      return (p = r.value) == null ? void 0 : p.call(r, e);
    }), s = m(() => `${a.value}-item-icon`), d = m(() => F(s.value, o.value)), f = () => u.value ? c(Nd, {
      icon: n,
      iconPrefix: l.value
    }, null) : null, h = () => {
      if (!i.value || !u.value)
        return null;
      const p = Wd(t);
      return c("span", {
        class: "anticon"
      }, [p]);
    };
    return () => u.value ? c("span", {
      class: d.value
    }, [f ? c(f, null, null) : c(h, null, null)]) : null;
  }
});
function Ud(e) {
  return e && e.indexOf("http") === 0 ? e : `/${e || ""}`.replace(/\/+/g, "/");
}
const Kn = /* @__PURE__ */ _({
  name: "MenuItemTitle",
  props: Ke(),
  setup(e) {
    const {
      path: t,
      level: n,
      noGroupLevel: r,
      name: a,
      locale: i
    } = ne(e), o = je(), {
      hashId: l,
      shouldShowIcon: u,
      baseClassName: s,
      shouldHasIcon: d,
      collapsedShowTitle: f,
      isGroup: h,
      translator: p,
      itemRender: g,
      collapsed: v
    } = o, y = m(() => {
      var b;
      return (b = p.value) == null ? void 0 : b.call(p, {
        name: a.value,
        locale: i.value
      });
    }), $ = m(() => Ud(t.value)), C = m(() => ea($.value)), j = m(() => `${s.value}-item-title`), B = m(() => h.value && n.value === 0), I = m(() => F(j.value, l.value, {
      [`${j.value}-collapsed`]: v.value,
      [`${j.value}-collapsed-level-${r.value}`]: v.value,
      [`${s.value}-item-link`]: C.value,
      [`${s.value}-group-item-title`]: B.value,
      [`${s.value}-item-collapsed-show-title`]: f.value && v.value
    })), O = (b) => {
      C && (window.open($.value, "_blank"), b.stopPropagation());
    }, T = () => u.value ? c(Gd, e, null) : null, E = () => {
      var V;
      if (v.value && n.value === 0)
        return null;
      const b = `${s.value}-item-text`, A = (V = d.value) == null ? void 0 : V.call(d, e), G = F(b, l.value, {
        [`${b}-has-icon`]: A && u
      });
      return c("span", {
        class: G
      }, [y.value]);
    }, L = () => g.value ? g.value(e, o) : c("div", {
      class: I.value,
      onClick: O
    }, [c(T, null, null), c(E, null, null)]);
    return () => c(L, null, null);
  }
}), Xd = /* @__PURE__ */ _({
  name: "MenuItem",
  props: Ke(),
  slots: Object,
  setup(e) {
    const {
      disabled: t,
      name: n,
      locale: r
    } = ne(e), {
      baseClassName: a,
      hashId: i,
      translator: o
    } = je(), l = `${a.value}-item`, u = m(() => F(l, i.value));
    return () => {
      const s = o.value({
        name: n.value,
        locale: r.value
      }), d = Se().vnode.key;
      return c(ht.Item, {
        class: u.value,
        key: d,
        disabled: t.value,
        title: s
      }, {
        default: () => c(Kn, {
          name: e.name,
          locale: e.locale,
          path: e.path,
          level: e.level,
          noGroupLevel: e.noGroupLevel
        }, null)
      });
    };
  }
}), Kd = /* @__PURE__ */ _({
  name: "SubMenu",
  props: Ke(),
  setup(e) {
    const {
      disabled: t,
      children: n,
      level: r
    } = ne(e), a = je(), {
      subMenuRender: i,
      baseClassName: o,
      shouldHasIcon: l,
      shouldShowIcon: u,
      hashId: s
    } = a, d = m(() => `${o.value}-submenu`), f = m(() => F(s.value, d.value, {
      [`${d.value}-has-icon`]: l.value(e) && u.value
    })), h = () => i.value ? i.value(e, a) : c(Kn, {
      name: e.name,
      locale: e.locale,
      path: e.path,
      level: e.level,
      noGroupLevel: e.noGroupLevel
    }, null), p = () => c(Vn, {
      items: n.value,
      level: r.value + 1,
      noGroupLevel: r.value + 1
    }, null);
    return () => {
      const g = Se().vnode.key;
      return c(ht.SubMenu, {
        class: f.value,
        key: g,
        disabled: t.value
      }, {
        title: h,
        default: p
      });
    };
  }
}), Vd = /* @__PURE__ */ _({
  name: "MenuGroup",
  props: Ke(),
  setup(e) {
    const {
      level: t,
      children: n
    } = e, r = je(), {
      hashId: a,
      subMenuRender: i,
      collapsedShowGroupTitle: o,
      baseClassName: l,
      collapsed: u
    } = r, s = `${l.value}-group`, d = m(() => F(s, a.value)), f = () => i.value ? i.value(e, r) : c(Kn, e, null), h = () => c(Vn, {
      items: n,
      level: t + 1,
      noGroupLevel: u.value ? t : t + 1
    }, null);
    return () => {
      if (u.value && !o.value)
        return c(h, null, null);
      const p = Se().vnode.key;
      return c(ht.ItemGroup, {
        class: d.value,
        key: p
      }, {
        title: c(f, null, null),
        default: c(h, null, null)
      });
    };
  }
}), Zd = /* @__PURE__ */ _({
  name: "MenuDivider",
  props: Ke(),
  setup(e) {
    const {
      path: t
    } = e, {
      baseClassName: n,
      collapsed: r,
      hashId: a
    } = je(), i = `${n.value}-divider`, o = `${String(Se().vnode.key) || t}-group-divider`, l = m(() => F(i, a.value)), {
      token: u
    } = Ln(), s = m(() => ({
      padding: 0,
      borderBlockEnd: 0,
      margin: r.value ? "4px" : "6px 16px",
      marginBlockStart: r.value ? 4 : 8,
      borderColor: Z(u.value.colorTextBase, 0.06)
    }));
    return () => c(ht.Divider, {
      class: l.value,
      style: s.value,
      key: o
    }, null);
  }
}), Vn = /* @__PURE__ */ _({
  name: "MenuItems",
  props: {
    items: Array,
    level: {
      type: Number,
      default: 0
    },
    noGroupLevel: {
      type: Number,
      default: 0
    }
  },
  setup(e) {
    const {
      items: t,
      level: n,
      noGroupLevel: r
    } = ne(e), {
      isGroup: a
    } = je();
    return () => {
      var i;
      return (i = t.value) == null ? void 0 : i.map((o) => {
        const {
          key: l,
          icon: u,
          locale: s,
          name: d,
          path: f,
          disabled: h,
          children: p
        } = o;
        return !p || !p.length ? c(Xd, {
          name: d,
          locale: s,
          icon: u,
          key: l,
          path: f,
          disabled: h,
          children: p,
          level: n.value,
          noGroupLevel: r.value
        }, null) : n.value === 0 && a.value ? [c(Vd, {
          name: d,
          locale: s,
          icon: u,
          key: l,
          path: f,
          children: p,
          level: n.value,
          noGroupLevel: r.value
        }, null), c(Zd, null, null)] : c(Kd, {
          name: d,
          locale: s,
          icon: u,
          key: l,
          path: f,
          disabled: h,
          children: p,
          level: n.value,
          noGroupLevel: r.value
        }, null);
      });
    };
  }
});
function qd(e) {
  const { collapsed: t, matchMenuKeys: n } = ne(e), { layout: r } = U(), a = ee(), i = (s) => {
    a.value = s;
  }, o = ee(), l = (s) => {
    o.value = s;
  };
  Mn(() => {
    n.value && n.value.join("-") !== (o.value || []).join("-") && l(n.value), // !props.defaultOpenAll &&
    // props.openKeys &&
    n.value.join("-") !== (a.value || []).join("-") && i(n.value);
  });
  const u = m(() => {
    if (a.value && !t.value && ["side", "mix"].includes(r.value || "mix"))
      return a.value;
  });
  return m(() => {
    const s = {
      onOpenChange: i,
      selectedKeys: o.value,
      onSelect: ({ selectedKeys: d }) => l(d)
    };
    return u.value && (s.openKeys = u.value), s;
  });
}
const zr = /* @__PURE__ */ _({
  name: "LayoutMenu",
  props: {
    ...Rd(),
    ...Ld()
  },
  setup(e) {
    const {
      mode: t,
      menuProps: n,
      data: r,
      style: a,
      className: i,
      type: o
    } = ne(e), {
      getPrefixCls: l
    } = Y(), {
      formatMessage: u,
      useLocale: s,
      layout: d,
      theme: f,
      siderCollapsed: h
    } = U(), p = m(() => l(`layout-menu-${t.value}`)), {
      wrapSSR: g,
      hashId: v
    } = Dd(l("layout-menu")), y = m(() => (e.menuRenderType === "sider" && h.value) ?? !1), $ = m(() => F(p.value, v.value, i.value, {
      [`${p.value}-horizontal`]: t.value === "horizontal",
      [`${p.value}-collapsed`]: y.value
    })), C = m(() => ({
      width: "100%",
      backgroundColor: "transparent",
      border: "none",
      ...a.value
    })), j = qd(e), B = m(() => (T) => {
      const {
        name: E,
        locale: L
      } = T;
      return s.value && u ? u({
        id: L,
        defaultMessage: E
      }) : E;
    }), I = m(() => o.value === "group" && d.value !== "top"), O = m(() => ({
      level: T
    }) => T == 0 || I.value && T === 1);
    return _d({
      hashId: v,
      baseClassName: p,
      mode: m(() => t.value),
      isGroup: I,
      translator: B,
      shouldHasIcon: O,
      shouldShowIcon: m(() => !I.value || !y.value),
      collapsed: y,
      collapsedShowTitle: m(() => !1),
      collapsedShowGroupTitle: m(() => !0),
      itemRender: m(() => null),
      subMenuRender: m(() => null)
    }), () => {
      var T;
      return e.loading ? c(Hd, e, null) : g(c(ht, be({
        key: "Menu",
        class: $.value,
        style: C.value,
        mode: t.value,
        theme: (T = f.value) == null ? void 0 : T.type,
        inlineIndent: 16,
        _internalDisableMenuItemTitleTooltip: !0
      }, j.value, n.value), {
        default: () => [c(Vn, {
          items: r.value,
          level: 0,
          noGroupLevel: 0
        }, null)]
      }));
    };
  }
}), Yd = /* @__PURE__ */ _({
  name: "BaseLayout",
  inheritAttrs: !1,
  props: za(),
  slots: Object,
  setup(e, {
    slots: t
  }) {
    const {
      pure: n,
      style: r,
      loading: a
    } = ne(e), {
      getPrefixCls: i
    } = Y(), o = i("layout"), {
      wrapSSR: l,
      hashId: u
    } = Wc(o), s = m(() => ({
      minHeight: "100%",
      flexDirection: e.hasSider ? "row" : void 0,
      ...r
    })), {
      shouldHeaderRender: d,
      shouldSiderRender: f,
      siderMenuType: h,
      screenSize: p,
      layout: g,
      siderFixed: v,
      siderCollapsed: y,
      isMobile: $,
      siderMenus: C,
      headerMenus: j,
      matchMenuKeys: B,
      footerToolbarCounts: I
    } = Ys(e, t), O = m(() => F(o, u.value, {
      [`screen-${p.value}`]: p.value,
      [`${o}-top-menu`]: g.value === "top",
      // [`${componentCls}-is-children`]: isChildrenLayout,
      [`${o}-fix-siderbar`]: v.value,
      [`${o}-${g.value}`]: g.value
    })), T = (L, {
      slots: b
    }) => {
      var V;
      const A = F(u.value, i("layout-container"));
      return c("div", {
        class: A,
        style: {
          position: "relative"
        }
      }, [(V = b.default) == null ? void 0 : V.call(b)]);
    }, E = () => {
      var b;
      const L = [];
      if (t.footer && L.push((b = t.footer) == null ? void 0 : b.call(t)), I.value > 0) {
        const A = {
          height: "64px",
          marginBlockStart: "40px"
        };
        L.push(c("div", {
          style: A
        }, null));
      }
      return L;
    };
    return () => {
      var L;
      return n.value ? (L = t == null ? void 0 : t.default) == null ? void 0 : L.call(t) : l(c("div", {
        class: O.value
      }, [c("div", {
        class: F(u.value, i("layout-bg-list"))
      }, null), c(ze, {
        style: s
      }, {
        default: () => [f.value && c(Ad, null, {
          header: () => c(Rt, null, null),
          // footer: () => 'SiderFooter',
          default: () => c(zr, {
            key: "side-menu",
            menuRenderType: "sider",
            matchMenuKeys: B.value,
            mode: y.value && !$.value ? "vertical" : "inline",
            type: h.value,
            data: C.value
          }, null)
          // extra: () => 'SiderExtra',
        }), c(T, null, {
          default: () => [d.value && c(Cd, null, {
            default: () => [c(zr, {
              matchMenuKeys: B.value,
              menuRenderType: "header",
              mode: "horizontal",
              data: j.value,
              style: {
                width: "100%"
              }
            }, null)]
          }), c(Ed, null, {
            default: () => {
              var b;
              return [a.value ? c(ai, null, null) : (b = t == null ? void 0 : t.default) == null ? void 0 : b.call(t)];
            }
          }), c(E, null, null)]
        })]
      })]));
    };
  }
}), Pf = /* @__PURE__ */ _({
  name: "MayaLayout",
  props: za(),
  slots: Object,
  setup(e, {
    slots: t
  }) {
    const {
      theme: n
    } = ne(e), r = m(() => ({
      hashed: !0,
      ...n.value
    }));
    return () => c(_a, {
      prefix: "maya",
      autoClearCache: !0,
      theme: r.value
    }, {
      default: () => [c(Yd, be(e, {
        theme: r.value
      }), {
        ...t
      })]
    });
  }
}), wf = (e) => {
  const {
    layout: t
  } = U(), {
    isGreater: n
  } = ya();
  return t.value !== "side" && n("lg") ? c(Si.Search, e, null) : null;
}, $f = (e) => {
  const {
    title: t
  } = e, {
    siderCollapsed: n
  } = U(), r = () => n.value ? null : c("span", null, [t]);
  return [c(xi, be({
    size: "small"
  }, e), null), c(r, null, null)];
}, oi = () => ({
  title: String,
  loading: Boolean,
  stylish: Function,
  style: Object,
  headerFixed: {
    type: Boolean,
    default: !0
  }
}), [Nr, Wr, Qd, Jd] = [576, 768, 992, 1200].map(
  (e) => `@media (max-width: ${e}px)`
), li = (e) => {
  const {
    colorBgElevated: t
  } = e;
  return {
    colorBgPageContainer: "transparent",
    paddingInlinePageContainerContent: 40,
    paddingBlockPageContainerContent: 32,
    colorBgPageContainerFixed: t
  };
}, ef = (e) => ({
  [e.componentCls]: {
    position: "relative",
    "&-children-container": {
      paddingBlockStart: 0,
      paddingBlockEnd: e.paddingBlockPageContainerContent,
      paddingInline: e.paddingInlinePageContainerContent
    },
    "&-children-container-no-header": {
      paddingBlockStart: e.paddingBlockPageContainerContent
    },
    "&-affix": {
      [`${e.infraCls}-affix`]: {
        [`${e.componentCls}-wrap`]: {
          backgroundColor: e.colorBgPageContainerFixed,
          transition: "background-color 0.3s",
          boxShadow: e.boxShadow
        }
      }
    },
    [`& ${e.prefixCls}-page-header`]: {
      paddingBlockStart: (e.paddingBlockPageContainerContent ?? 40) / 4,
      paddingBlockEnd: (e.paddingBlockPageContainerContent ?? 40) / 2,
      paddingInlineStart: e.paddingInlinePageContainerContent,
      paddingInlineEnd: e.paddingInlinePageContainerContent,
      [`& ~ ${e.prefixCls}-grid-content`]: {
        [`${e.prefixCls}-page-container-children-content`]: {
          paddingBlock: (e.paddingBlockPageContainerContent ?? 24) / 3
        }
      },
      [`${e.prefixCls}-page-header-breadcrumb`]: {
        paddingBlockStart: (e.paddingBlockPageContainerContent ?? 40) / 4 + 10
      },
      [`${e.prefixCls}-page-header-heading`]: {
        paddingBlockStart: (e.paddingBlockPageContainerContent ?? 40) / 4
      },
      [`${e.prefixCls}-page-header-footer`]: {
        marginBlockStart: (e.paddingBlockPageContainerContent ?? 40) / 4
      }
    },
    "&-detail": {
      display: "flex",
      [Nr]: {
        display: "block"
      }
    },
    "&-main": {
      width: "100%"
    },
    "&-row": {
      display: "flex",
      width: "100%",
      [Wr]: {
        display: "block"
      }
    },
    "&-content": {
      flex: "auto",
      width: "100%"
    },
    "&-extraContent": {
      flex: "0 1 auto",
      minWidth: "242px",
      marginInlineStart: 88,
      textAlign: "end",
      [Jd]: {
        marginInlineStart: 44
      },
      [Qd]: {
        marginInlineStart: 20
      },
      [Wr]: {
        marginInlineStart: 0,
        textAlign: "start"
      },
      [Nr]: {
        marginInlineStart: 0
      }
    }
  }
});
function tf(e) {
  return Q("PageContainer", (t) => {
    const n = {
      ...t,
      ...li(t),
      componentCls: e
    };
    return [ef(n)];
  });
}
function nf(e, {
  stylish: t
}) {
  return Q("PageContainerStylish", (n) => {
    const r = {
      ...n,
      componentCls: `.${e}`
    };
    return t ? [
      {
        [`div${r.componentCls}`]: t == null ? void 0 : t(r)
      }
    ] : [];
  });
}
const rf = (e) => ({
  [e.componentCls]: {
    width: "100%",
    "&-wide": {
      maxWidth: 1152,
      margin: "0 auto"
    }
  }
});
function af(e) {
  return Q("LayoutGridContent", (t) => [rf({
    ...t,
    componentCls: e
  })]);
}
const of = /* @__PURE__ */ _({
  name: "LayoutGridContent",
  props: ri(),
  setup(e, {
    slots: t
  }) {
    const {
      style: n
    } = e, {
      getPrefixCls: r
    } = Y(), {
      contentWidthType: a,
      layout: i
    } = U(), o = r("layout-grid-content"), {
      wrapSSR: l,
      hashId: u
    } = af(o), s = m(() => F(o, u.value, {
      [`${o}-wide`]: a.value === "Fixed" && i.value === "top"
    }));
    return () => {
      var d;
      return l(c("div", {
        class: s.value,
        style: n
      }, [c("div", {
        class: F(`${o}-grid-content-children`, u.value)
      }, [(d = t == null ? void 0 : t.default) == null ? void 0 : d.call(t)])]));
    };
  }
}), lf = (e) => ({
  [e.componentCls]: {
    position: "fixed",
    insetInlineEnd: 0,
    bottom: 0,
    zIndex: 99,
    display: "flex",
    alignItems: "center",
    width: "100%",
    paddingInline: 24,
    paddingBlock: 0,
    boxSizing: "border-box",
    lineHeight: "64px",
    backgroundColor: Z(e.colorBgElevated, 0.6),
    borderBlockStart: `1px solid ${e.colorSplit}`,
    "-webkit-backdrop-filter": "blur(8px)",
    backdropFilter: "blur(8px)",
    color: e.colorText,
    transition: "all 0.2s ease 0s",
    "&-left": {
      flex: 1,
      color: e.colorText
    },
    "&-right": {
      color: e.colorText,
      "> *": {
        marginInlineEnd: 8,
        "&:last-child": {
          marginBlock: 0,
          marginInline: 0
        }
      }
    }
  }
});
function uf(e) {
  return Q("LayoutFooterToolbar", (t) => [lf({
    ...t,
    componentCls: e
  })]);
}
function cf(e, {
  stylish: t
}) {
  return Q("LayoutFooterToolbarStylish", (n) => {
    const r = {
      ...n,
      componentCls: e
    };
    return t ? [
      {
        [`${r.componentCls}`]: t == null ? void 0 : t(r)
      }
    ] : [];
  });
}
const sf = () => ({
  stylish: Function,
  useTeleport: {
    type: Boolean,
    default: !0
  },
  style: Object
}), df = /* @__PURE__ */ _({
  name: "FooterToolbar",
  props: sf(),
  slots: Object,
  setup(e, {
    slots: t
  }) {
    const {
      stylish: n,
      useTeleport: r,
      style: a
    } = e, {
      getPrefixCls: i
    } = Y(), {
      getTargetContainer: o
    } = Kt(), {
      shouldSiderRender: l,
      siderWidth: u,
      isMobile: s,
      registerFooterToolbar: d,
      deregisterFooterToolbar: f
    } = U(), h = i("layout-footer-toolbar"), {
      wrapSSR: p,
      hashId: g
    } = uf(h);
    An(d), ha(f);
    const v = cf(`${h}.${h}-stylish`, {
      stylish: n
    }), y = m(() => F(h, g.value)), $ = m(() => {
      if (l.value)
        return u.value ? s.value ? "100%" : `calc(100% - ${u.value}px)` : "100%";
    }), C = m(() => {
      var O;
      return typeof window === void 0 || typeof document === void 0 ? null : ((O = o == null ? void 0 : o.value) == null ? void 0 : O.call(o)) || document.body;
    }), j = () => {
      var O, T;
      return [c("div", {
        class: `${h}-left ${g.value}`.trim()
      }, [(O = t.extra) == null ? void 0 : O.call(t)]), c("div", {
        class: `${h}-right ${g.value}`.trim()
      }, [(T = t.default) == null ? void 0 : T.call(t)])];
    }, B = () => {
      const O = F(h, g.value, {
        [`${h}-stylish`]: !!n
      }), T = {
        width: $.value,
        ...a
      };
      return c("div", {
        class: O,
        style: T
      }, [c(j, null, null)]);
    }, I = () => !la() || !r || !C.value ? c(B, null, null) : c(vi, {
      to: C.value
    }, {
      default: () => [c(B, null, null)]
    });
    return () => v.wrapSSR(p(c("template", {
      key: y.value
    }, [c(I, null, null)])));
  }
}), ff = /* @__PURE__ */ _({
  name: "BasePage",
  props: oi(),
  slots: Object,
  setup(e, {
    slots: t
  }) {
    const {
      loading: n,
      stylish: r,
      style: a,
      headerFixed: i
    } = Wl(e), {
      headerFixed: o,
      layout: l
    } = U(), {
      getPrefixCls: u
    } = Y(), s = u("page-container"), {
      wrapSSR: d,
      hashId: f
    } = tf(s), h = m(() => i.value && !!t.header), p = m(() => (l.value === "top" || l.value === "mix") && o.value ? 56 : 1), g = m(() => F(s, f.value, {
      [`${s}-with-footer`]: !!t.footer,
      [`${s}-with-affix`]: h.value,
      [`${s}-stylish`]: !!r.value
    })), v = nf(`${s}.${s}-stylish`, {
      stylish: e.stylish
    }), y = () => {
      var j;
      if (h.value) {
        const B = F(f.value, `${s}-affix`);
        return c(Ci, {
          class: B,
          offsetTop: p.value
        }, {
          default: () => {
            var I;
            return [c("div", {
              class: F(`${s}-wrap`, f.value)
            }, [(I = t.header) == null ? void 0 : I.call(t)])];
          }
        });
      }
      return (j = t.header) == null ? void 0 : j.call(t);
    }, $ = () => {
      const j = F(f.value, `${s}-children-container`, {
        [`${s}-children-container-no-header`]: !t.header
      });
      return n.value ? c(ai, {
        spinning: !0
      }, null) : c(() => {
        var I;
        return c("div", {
          class: j
        }, [(I = t.default) == null ? void 0 : I.call(t)]);
      }, null, null);
    }, C = () => t.footer ? c(df, null, {
      default: () => {
        var j;
        return [(j = t.footer) == null ? void 0 : j.call(t)];
      }
    }) : null;
    return () => d(v.wrapSSR(c(At, null, [c("div", {
      class: g.value,
      style: a.value
    }, [c(y, null, null), c(of, null, {
      default: () => [c($, null, null)]
    })]), c(C, null, null)])));
  }
}), Of = /* @__PURE__ */ _({
  name: "MayaPage",
  props: oi(),
  slots: Object,
  setup(e, {
    slots: t
  }) {
    const {
      registerPageContainer: n,
      deregisterPageContainer: r
    } = U();
    return An(n), ha(r), () => c(_a, null, {
      default: () => [c(ff, e, {
        ...t
      })]
    });
  }
}), pf = () => ({
  tabs: Array,
  tabActiveKey: [String, Number],
  onTabChange: Function
}), mf = () => ({
  className: String,
  title: String,
  subTitle: String,
  style: Object,
  contentStyle: Object,
  onBack: Function,
  ghost: Boolean,
  showBreadcrumb: {
    type: Boolean,
    default: !0
  },
  onBreadcrumbClick: Function,
  ...pf()
}), hf = (e) => ({
  pageHeaderBgGhost: "transparent",
  pageHeaderPadding: 16,
  pageHeaderPaddingVertical: 4,
  pageHeaderPaddingBreadCrumb: e.paddingSM,
  pageHeaderColorBack: e.colorTextHeading,
  pageHeaderFontSizeHeaderTitle: e.fontSizeHeading4,
  pageHeaderFontSizeHeaderSubTitle: 14,
  pageHeaderPaddingContentPadding: e.paddingSM
}), gf = (e) => ({
  [`${e.componentCls}`]: {
    ...cn == null ? void 0 : cn(e),
    position: "relative",
    backgroundColor: e.pageHeaderBgGhost,
    paddingBlock: e.pageHeaderPaddingVertical + 2,
    paddingInline: e.pageHeaderPadding,
    "&-no-children": {
      height: e.paddingBlockPageContainerContent
    },
    "& &-has-breadcrumb": {
      paddingBlockStart: e.pageHeaderPaddingBreadCrumb
    },
    "& &-has-footer": {
      paddingBlockEnd: 0
    },
    "& &-back": {
      marginInlineEnd: e.margin,
      fontSize: 16,
      lineHeight: 1,
      "&-button": {
        fontSize: 16,
        ...un == null ? void 0 : un(e),
        color: e.pageHeaderColorBack,
        cursor: "pointer"
      },
      [`${e.componentCls}-rlt &`]: {
        float: "right",
        marginInlineEnd: 0,
        marginInlineStart: 0
      }
    },
    [`& ${e.infraCls}-divider-vertical`]: {
      height: 14,
      marginBlock: 0,
      marginInline: e.marginSM,
      verticalAlign: "middle"
    },
    "& &-breadcrumb + &-heading": {
      marginBlockStart: e.marginXS
    },
    "&-heading": {
      display: "flex",
      justifyContent: "space-between",
      "&-left": {
        display: "flex",
        alignItems: "center",
        marginBlock: e.marginXS / 2,
        marginInlineEnd: 0,
        marginInlineStart: 0,
        overflow: "hidden"
      },
      "&-title": {
        marginInlineEnd: e.marginSM,
        marginBlockEnd: 0,
        color: e.colorTextHeading,
        fontWeight: 600,
        fontSize: e.pageHeaderFontSizeHeaderTitle,
        lineHeight: e.controlHeight + "px",
        ...Or(),
        [`${e.componentCls}-rlt &`]: {
          marginInlineEnd: 0,
          marginInlineStart: e.marginSM
        }
      },
      "&-avatar": {
        marginInlineEnd: e.marginSM,
        [`${e.componentCls}-rlt &`]: {
          float: "right",
          marginInlineEnd: 0,
          marginInlineStart: e.marginSM
        }
      },
      "&-tags": {
        [`${e.componentCls}-rlt &`]: {
          float: "right"
        }
      },
      "&-sub-title": {
        marginInlineEnd: e.marginSM,
        color: e.colorTextSecondary,
        fontSize: e.pageHeaderFontSizeHeaderSubTitle,
        lineHeight: e.lineHeight,
        ...Or(),
        [`${e.componentCls}-rlt &`]: {
          float: "right",
          marginInlineEnd: 0,
          marginInlineStart: 12
        }
      },
      "&-extra": {
        marginBlock: e.marginXS / 2,
        marginInlineEnd: 0,
        marginInlineStart: 0,
        whiteSpace: "nowrap",
        "> *": {
          "white-space": "unset",
          [`${e.componentCls}-rlt &`]: {
            marginInlineEnd: e.marginSM,
            marginInlineStart: 0
          }
        },
        [`${e.componentCls}-rlt &`]: {
          float: "left"
        },
        "*:first-child": {
          [`${e.componentCls}-rlt &`]: {
            marginInlineEnd: 0
          }
        }
      }
    },
    "&-content": {
      paddingBlockStart: e.pageHeaderPaddingContentPadding
    },
    "&-footer": {
      marginBlockStart: e.margin
    },
    "&-compact &-heading": {
      flexWrap: "wrap"
    },
    "&-wide": {
      maxWidth: 1152,
      margin: "0 auto"
    },
    "&-rtl": {
      direction: "rtl"
    }
  }
});
function vf(e) {
  return Q("PageHeader", (t) => [gf({
    ...t,
    ...li(t),
    ...hf(t),
    componentCls: e
  })]);
}
function yf(e) {
  return typeof e == "function" || Object.prototype.toString.call(e) === "[object Object]" && !Ht(e);
}
const Mf = /* @__PURE__ */ _({
  name: "PageHeader",
  props: mf(),
  slots: Object,
  setup(e, {
    slots: t
  }) {
    const {
      title: n,
      subTitle: r,
      tabs: a,
      onTabChange: i,
      tabActiveKey: o,
      showBreadcrumb: l
    } = ne(e), {
      getPrefixCls: u,
      direction: s
    } = Y(), {
      layout: d,
      contentWidthType: f,
      matchMenus: h
    } = U(), p = u("page-header"), {
      wrapSSR: g,
      hashId: v
    } = vf(p), y = ee(), {
      width: $
    } = va(y), C = m(() => F(p, v.value, {
      [`${p}-has-breadcrumb`]: !!t.breadcrumb,
      [`${p}-has-footer`]: !!t.footer,
      [`${p}-rtl`]: s.value === "rtl",
      [`${p}-compact`]: $.value < 768,
      [`${p}-wide`]: f.value === "Fixed" && d.value == "top",
      [`${p}-ghost`]: !0
    })), j = () => {
      if (!e.onBack)
        return null;
      const P = F(`${p}-back`, v.value), S = F(`${p}-back-button`, v.value), x = t.back ? t.back() : s.value === "rtl" ? c(js, null, null) : c(Os, null, null);
      return c("div", {
        class: P
      }, [c("div", {
        class: S,
        role: "button",
        onClick: e.onBack,
        "aria-label": "back"
      }, [x])]);
    }, B = () => {
      var S;
      if (!t.avatar)
        return null;
      const P = F(`${p}-heading-avatar`, v.value);
      return c("div", {
        class: P
      }, [(S = t.avatar) == null ? void 0 : S.call(t)]);
    }, I = () => {
      if (!n.value && !t.title)
        return null;
      const P = F(`${p}-heading-title`, v.value), S = c("span", {
        class: P,
        title: n.value
      }, [n.value]);
      return t.title ? t.title({
        props: e,
        default: S
      }) : S;
    }, O = () => {
      if (!r.value && !t.subTitle)
        return null;
      const P = F(`${p}-heading-sub-title`, v.value), S = c("span", {
        class: P,
        title: r.value
      }, [r.value]);
      return t.subTitle ? t.subTitle({
        props: e,
        default: S
      }) : S;
    }, T = () => {
      if (!t.tags)
        return null;
      const P = F(`${p}-heading-tags`, v.value);
      return c("span", {
        class: P
      }, [t.tags()]);
    }, E = () => {
      let P;
      if (!t.extra)
        return null;
      const S = F(`${p}-heading-extra`, v.value);
      return c(Kr, {
        class: S
      }, yf(P = t.extra()) ? P : {
        default: () => [P]
      });
    }, L = () => {
      const P = F(`${p}-heading`, v.value);
      return n.value || r.value || t.title || t.subTitle || t.avatar || t.back || t.extra || t.tags ? c("div", {
        class: P
      }, [c("div", {
        class: F(`${p}-heading-left`, v.value)
      }, [c(j, null, null), c(B, null, null), c(I, null, null), c(O, null, null), c(T, null, null)]), c(E, null, null)]) : null;
    }, b = () => {
      if (!l.value)
        return null;
      const P = F(`${p}-breadcrumb`), S = c(Ti, {
        class: P,
        routes: h.value,
        itemRender: ({
          route: x
        }) => h.value.indexOf(x) === h.value.length - 1 ? c("span", null, [x.breadcrumbName]) : c("a", {
          onClick: () => {
            var M;
            return (M = e.onBreadcrumbClick) == null ? void 0 : M.call(e, x);
          }
        }, [x.breadcrumbName])
      }, null);
      return t.breadcrumb ? t.breadcrumb({
        props: e,
        default: S
      }) : S;
    }, A = () => {
      if (!a.value || !a.value.length)
        return null;
      const P = F(`${p}-footer-tabs`, v.value), S = a.value.map((x, M) => c(qn.TabPane, {
        key: x.key || M,
        tab: x.tab
      }, null));
      return c(qn, {
        class: P,
        activeKey: o.value,
        onChange: i.value
      }, {
        default: () => S,
        rightExtra: t.tabExtra
      });
    }, G = () => {
      const P = F(`${p}-footer`, v.value);
      let S = null;
      return t.footer && (S = t.footer()), a.value && a.value.length && (S = c(A, null, null)), S ? c("div", {
        class: P
      }, [S]) : null;
    }, V = () => {
      if (!t.default)
        return null;
      const P = F(`${p}-content`, v.value);
      return c("div", {
        class: P
      }, [t.default()]);
    };
    return () => g(c("div", {
      class: C.value,
      ref: y
    }, [c(b, null, null), c(L, null, null), c(V, null, null), c(G, null, null)]));
  }
}), ui = () => ({
  style: Object,
  links: Array,
  copyright: [String, Object]
}), bf = (e) => ({
  [e.componentCls]: {
    marginBlock: 0,
    marginBlockStart: 48,
    marginBlockEnd: 24,
    marginInline: 0,
    paddingBlock: 0,
    paddingInline: 16,
    textAlign: "center",
    "&-list": {
      marginBlockEnd: 8,
      color: e.colorTextSecondary,
      "&-link": {
        color: e.colorTextSecondary,
        textDecoration: e.linkDecoration
      },
      "*:not(:last-child)": {
        marginInlineEnd: 8
      },
      "&:hover": {
        color: e.colorPrimary
      }
    },
    "&-copyright": { fontSize: "14px", color: e.colorText }
  }
});
function Sf(e) {
  return Q("LayoutFooter", (t) => [bf({
    ...t,
    componentCls: e
  })]);
}
const xf = /* @__PURE__ */ _({
  name: "GlobalFooter",
  props: ui(),
  setup(e) {
    const {
      copyright: t,
      links: n
    } = e, {
      getPrefixCls: r
    } = Y(), a = r("global-footer"), {
      wrapSSR: i,
      hashId: o
    } = Sf(a), l = m(() => F(a, o.value)), u = () => {
      if (!n || !n.length)
        return null;
      const d = F(`${a}-list`, o.value), f = F(`${a}-list-link`, o.value);
      return c("div", {
        class: d
      }, [n.map((h) => c("a", {
        class: f,
        key: h.key,
        title: h.key,
        target: h.blankTarget ? "_blank" : "_self",
        href: h.href,
        rel: "noreferrer"
      }, [h.title]))]);
    }, s = () => {
      if (!t)
        return null;
      const d = F(`${a}-copyright`, o.value);
      return c("div", {
        class: d
      }, [t]);
    };
    return () => i(c("div", {
      class: l.value
    }, [c(u, null, null), c(s, null, null)]));
  }
}), If = /* @__PURE__ */ _({
  name: "LayoutFooter",
  props: ui(),
  setup(e) {
    const {
      style: t
    } = ne(e), {
      pure: n
    } = U();
    return n.value ? null : () => c(ze.Footer, {
      style: {
        padding: 0,
        ...t
      }
    }, {
      default: () => [c(xf, e, null)]
    });
  }
});
export {
  $f as Avatar,
  If as Footer,
  wf as HeaderSearch,
  Of as PageContainer,
  Mf as PageHeader,
  Pf as default
};
