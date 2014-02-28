/*******************************************************************************
 * Copyright 2012 Vassili Philippov <vassiliphilippov@onepf.org>
 * Copyright 2012 One Platform Foundation <www.onepf.org>
 * Copyright 2012 Yandex <www.yandex.com>
 * 
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 * 
 *        http://www.apache.org/licenses/LICENSE-2.0
 * 
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
 ******************************************************************************/

var dataLanguages = {
  "ab" : "Abkhaz",
  "aa" : "Afar",
  "af" : "Afrikaans",
  "ak" : "Akan",
  "sq" : "Albanian",
  "am" : "Amharic",
  "ar" : "Arabic",
  "ar_eg" : "Arabic (Egypt)",
  "ar_il" : "Arabic (Israel)",
  "an" : "Aragonese",
  "hy" : "Armenian",
  "as" : "Assamese",
  "av" : "Avaric",
  "ae" : "Avestan",
  "ay" : "Aymara",
  "az" : "Azerbaijani",
  "bm" : "Bambara",
  "ba" : "Bashkir",
  "eu" : "Basque",
  "be" : "Belarusian",
  "bn" : "Bengali",
  "bh" : "Bihari",
  "bi" : "Bislama",
  "bs" : "Bosnian",
  "br" : "Breton",
  "bg" : "Bulgarian",
  "my" : "Burmese",
  "ca" : "Catalan",
  "ch" : "Chamorro",
  "ce" : "Chechen",
  "ny" : "Chichewa",
  "zh" : "Chinese",
  "zh_cn" : "Chinese (PRC)",
  "zh_tw" : "Chinese (Taiwan)",
  "zh_hk" : "Chinese (HK)",
  "cv" : "Chuvash",
  "kw" : "Cornish",
  "co" : "Corsican",
  "cr" : "Cree",
  "hr" : "Croatian",
  "cs" : "Czech",
  "da" : "Danish",
  "dv" : "Divehi",
  "nl" : "Dutch",
  "nl_be" : "Dutch (Belgium)",
  "nl_nl" : "Dutch (Netherlands)",
  "dz" : "Dzongkha",
  "en" : "English",
  "en_us" : "English (US)",
  "en_au" : "English (Australia)",
  "en_gb" : "English (Britain)",
  "en_ca" : "English (Canada)",
  "en_nz" : "English (New Zealand)",
  "en_sg" : "English (Singapore)",
  "en_cd" : "English (Canada)",
  "eo" : "Esperanto",
  "et" : "Estonian",
  "ee" : "Ewe",
  "fo" : "Faroese",
  "fj" : "Fijian",
  "fi" : "Finnish",
  "fr" : "French",
  "fr_be" : "French (Belgium)",
  "fr_ca" : "French (Canada)",
  "fr_fr" : "French (France)",
  "fr_ch" : "French (Switzerland)",
  "ff" : "Fula",
  "gl" : "Galician",
  "ka" : "Georgian",
  "de" : "German",
  "de_at" : "German (Austria)",
  "de_de" : "German (Germany)",
  "de_li" : "German (Liechtenstein)",
  "de_ch" : "German (Switzerland)",
  "el" : "Greek",
  "gn" : "GuaranГ­",
  "gu" : "Gujarati",
  "ht" : "Haitian",
  "ha" : "Hausa",
  "he" : "Hebrew",
  "hz" : "Herero",
  "hi" : "Hindi",
  "ho" : "Hiri Motu",
  "hu" : "Hungarian",
  "ia" : "Interlingua",
  "id" : "Indonesian",
  "ie" : "Interlingue",
  "ga" : "Irish",
  "ig" : "Igbo",
  "ik" : "Inupiaq",
  "io" : "Ido",
  "is" : "Icelandic",
  "it" : "Italian",
  "it_it" : "Italian (Italy)",
  "it_ch" : "Italian (Switzerland)",
  "iu" : "Inuktitut",
  "ja" : "Japanese",
  "jv" : "Javanese",
  "kl" : "Kalaallisut",
  "kn" : "Kannada",
  "kr" : "Kanuri",
  "ks" : "Kashmiri",
  "kk" : "Kazakh",
  "km" : "Khmer",
  "ki" : "Kikuyu",
  "rw" : "Kinyarwanda",
  "ky" : "Kyrgyz",
  "kv" : "Komi",
  "kg" : "Kongo",
  "ko" : "Korean",
  "ku" : "Kurdish",
  "kj" : "Kwanyama",
  "la" : "Latin",
  "lb" : "Luxembourgish",
  "lg" : "Ganda",
  "li" : "Limburgish",
  "ln" : "Lingala",
  "lo" : "Lao",
  "lt" : "Lithuanian",
  "lu" : "Luba-Katanga",
  "lv" : "Latvian",
  "gv" : "Manx",
  "mk" : "Macedonian",
  "mg" : "Malagasy",
  "ms" : "Malay",
  "ml" : "Malayalam",
  "mt" : "Maltese",
  "mi" : "Maori",
  "mr" : "Marathi",
  "mh" : "Marshallese",
  "mn" : "Mongolian",
  "na" : "Nauru",
  "nv" : "Navajo",
  "nb" : "Norwegian Bokmal",
  "nd" : "North Ndebele",
  "ne" : "Nepali",
  "ng" : "Ndonga",
  "nn" : "Norwegian Nynorsk",
  "no" : "Norwegian",
  "ii" : "Nuosu",
  "nr" : "South Ndebele",
  "oc" : "Occitan",
  "oj" : "Ojibwe",
  "om" : "Oromo",
  "or" : "Oriya",
  "os" : "Ossetian",
  "pa" : "Panjabi",
  "pi" : "Pali",
  "fa" : "Persian",
  "pl" : "Polish",
  "ps" : "Pashto",
  "pt" : "Portuguese",
  "pt_br" : "Portuguese (Brazil)",
  "pt_pt" : "Portuguese (Portugal)",
  "qu" : "Quechua",
  "rm" : "Romansh",
  "rn" : "Kirundi",
  "ro" : "Romanian",
  "ru" : "Russian",
  "sa" : "Sanskrit",
  "sc" : "Sardinian",
  "sd" : "Sindhi",
  "se" : "Northern Sami",
  "sm" : "Samoan",
  "sg" : "Sango",
  "sr" : "Serbian",
  "gd" : "Gaelic",
  "sn" : "Shona",
  "si" : "Sinhala",
  "sk" : "Slovak",
  "sl" : "Slovene",
  "so" : "Somali",
  "st" : "Southern Sotho",
  "es" : "Spanish",
  "es_es" : "Spanish (Spain)",
  "es_us" : "Spanish (US)",
  "es_la" : "Spanish (Latin America)",
  "su" : "Sundanese",
  "sw" : "Swahili",
  "ss" : "Swati",
  "sv" : "Swedish",
  "ta" : "Tamil",
  "te" : "Telugu",
  "tg" : "Tajik",
  "th" : "Thai",
  "ti" : "Tigrinya",
  "bo" : "Tibetan Standard",
  "tk" : "Turkmen",
  "tl" : "Tagalog",
  "tn" : "Tswana",
  "to" : "Tonga",
  "tr" : "Turkish",
  "ts" : "Tsonga",
  "tt" : "Tatar",
  "tw" : "Twi",
  "ty" : "Tahitian",
  "ug" : "Uighur",
  "uk" : "Ukrainian",
  "ur" : "Urdu",
  "uz" : "Uzbek",
  "ve" : "Venda",
  "vi" : "Vietnamese",
  "vo" : "Volapuk",
  "wa" : "Walloon",
  "cy" : "Welsh",
  "wo" : "Wolof",
  "fy" : "Western Frisian",
  "xh" : "Xhosa",
  "yi" : "Yiddish",
  "yo" : "Yoruba",
  "za" : "Zhuang",
  "zu" : "Zulu"
};