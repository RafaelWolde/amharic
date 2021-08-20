var ele, last;
var x = 0, y = 0;
var sh, caps;
var amharicAlphabet = [
        ['ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ'], ['ለ', 'ሉ', 'ሊ', 'ላ', 'ሌ', 'ል', 'ሎ'], ['ሐ', 'ሑ', 'ሒ', 'ሓ', 'ሔ', 'ሕ', 'ሖ'], ['መ', 'ሙ', 'ሚ', 'ማ', 'ሜ', 'ም', 'ሞ'],
        ['ሠ', 'ሡ', 'ሢ', 'ሣ', 'ሤ', 'ሥ', 'ሦ'], ['ረ', 'ሩ', 'ሪ', 'ራ', 'ሬ', 'ር', 'ሮ'], ['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ'], ['ሸ', 'ሹ', 'ሺ', 'ሻ', 'ሼ', 'ሽ', 'ሾ'],
        ['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ'], ['በ', 'ቡ', 'ቢ', 'ባ', 'ቤ', 'ብ', 'ቦ'], ['ቨ', 'ቩ', 'ቪ', 'ቫ', 'ቬ', 'ቭ', 'ቮ'], ['ተ', 'ቱ', 'ቲ', 'ታ', 'ቴ', 'ት', 'ቶ'],
        ['ቸ', 'ቹ', 'ቺ', 'ቻ', 'ቼ', 'ች', 'ቾ'], ['ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ'], ['ኘ', 'ኙ', 'ኚ', 'ኛ', 'ኜ', 'ኝ', 'ኞ'], ['አ', 'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ', 'ኦ'],
        ['ወ', 'ዉ', 'ዊ', 'ዋ', 'ዌ', 'ው', 'ዎ'], ['ዘ', 'ዙ', 'ዚ', 'ዛ', 'ዜ', 'ዝ', 'ዞ'], ['ዠ', 'ዡ', 'ዢ', 'ዣ', 'ዤ', 'ዥ', 'ዦ'], ['ኸ', 'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ'],
        ['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ'], ['የ', 'ዩ', 'ዪ', 'ያ', 'ዬ', 'ይ', 'ዮ'], ['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ'], ['ጀ', 'ጁ', 'ጂ', 'ጃ', 'ጄ', 'ጅ', 'ጆ'],
        ['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ'], ['ጠ', 'ጡ', 'ጢ', 'ጣ', 'ጤ', 'ጥ', 'ጦ'], ['ጨ', 'ጩ', 'ጪ', 'ጫ', 'ጬ', 'ጭ', 'ጮ'], ['ጸ', 'ጹ', 'ጺ', 'ጻ', 'ጼ', 'ጽ', 'ጾ'],
        ['ጰ', 'ጱ', 'ጲ', 'ጳ', 'ጰ', 'ጵ', 'ጶ'], ['ፀ', 'ፁ', 'ፂ', 'ፃ', 'ፄ', 'ፅ', 'ፆ'], ['ፈ', 'ፉ', 'ፊ', 'ፋ', 'ፌ', 'ፍ', 'ፎ'], ['ፐ', 'ፑ', 'ፒ', 'ፓ', 'ፔ', 'ፕ', 'ፖ'],
        ['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ'], ['ዐ', 'ዑ', 'ዒ', 'ዓ', 'ዔ', 'ዕ', 'ዖ']];
function amharic(id) {
        ele = document.getElementById(id);
        ele.onkeyup = amhText;
        var temp = ele.value;

        function amhText(evt) {
                var ind = evt.target.selectionStart;
                caps = evt.getModifierState('CapsLock');
                sh = evt.getModifierState('Shift');
                if (evt.keyCode >= 65 && evt.keyCode <= 90) {
                        if (evt.keyCode === 66) {
                                x = 9;
                        } else if (evt.keyCode === 67) {
                                if (sh === false) {
                                        x = 12;
                                } else x = 26;
                        } else if (evt.keyCode === 68) {
                                x = 22;
                        } else if (evt.keyCode === 70) {
                                x = 30;
                        } else if (evt.keyCode === 71) {
                                x = 24;
                        } else if (evt.keyCode === 72) {
                                if (sh === true && caps === true) {
                                        x = 19;
                                } else if (sh === false && caps === true) {
                                        x = 20;
                                } else if (sh === false) {
                                        x = 0;
                                } else
                                        x = 2;
                        } else if (evt.keyCode === 74) {
                                x = 23;
                        } else if (evt.keyCode === 75) {
                                x = 32;
                        } else if (evt.keyCode === 76) {
                                x = 1;
                        } else if (evt.keyCode === 77) {
                                x = 3;
                        } else if (evt.keyCode === 78) {
                                if (sh === false) {
                                        x = 13;
                                } else
                                        x = 14;
                        } else if (evt.keyCode === 80) {
                                if (sh === false) {
                                        x = 31;
                                } else
                                        x = 28;
                        } else if (evt.keyCode === 81) {
                                x = 8;
                        } else if (evt.keyCode === 82) {
                                x = 5;
                        } else if (evt.keyCode === 83) {
                                if (sh === false && caps === false) {
                                        x = 6;
                                } else if (caps === true) {
                                        x = 7;
                                } else
                                        x = 4;
                        } else if (evt.keyCode === 84) {
                                if (caps === true && sh === true) {
                                        x = 29;
                                } else if (caps === true && sh === false) {
                                        x = 27;
                                } else if (sh === false) {
                                        x = 11;
                                } else
                                        x = 25;
                        } else if (evt.keyCode === 86) {
                                x = 10;
                        } else if (evt.keyCode === 87) {
                                x = 16;
                        } else if (evt.keyCode === 88) {
                                if (sh === false) {
                                        x = 15;
                                } else
                                        x = 33;
                        } else if (evt.keyCode === 89) {
                                if (sh === true) {
                                        x = 21;
                                } else
                                        y = 4;
                        } else if (evt.keyCode === 90) {
                                if (sh === false) {
                                        x = 17;
                                } else
                                        x = 18;
                        } else if (evt.keyCode === 65) {
                                y = 3;
                        } else if (evt.keyCode === 69) {
                                y = 5;
                        } else if (evt.keyCode === 73) {
                                y = 2;
                        } else if (evt.keyCode === 79) {
                                y = 6;
                        } else if (evt.keyCode === 85) {
                                y = 1;
                        }

                        if (y === 0) {
                                ele.value = temp.slice(0, ind - 1) + amharicAlphabet[x][0] + temp.slice(ind - 1, temp.length + 1);
                                evt.target.selectionStart = ind;
                                evt.target.selectionEnd = ind;
                        }
                        if (y > 0) {
                                ele.value = temp.slice(0, ind - 2) + amharicAlphabet[x][y] + temp.slice(ind - 1, temp.length + 1);
                                evt.target.selectionStart = ind - 1;
                                evt.target.selectionEnd = ind - 1;
                                y = 0;
                        }
                }
                temp = ele.value;
        }
}