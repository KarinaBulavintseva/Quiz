export default [
  {
    id: 0,
    title: "Ваш пол:",
    type: "text",
    options: ["Мужчина", "Женщина"],
  },
  {
    id: 1,
    title: "Укажите ваш возраст:",
    type: "text",
    options: ["До 18", "От 18 до 28", "От 29 до 35", "От 36"],
  },
  {
    id: 2,
    title: "Выберите лишнее:",
    type: "text",
    options: ["Дом", "Шалаш", "Бунгало", "Скамейка", "Хижина"],
  },
  {
    id: 3,
    title: "Продолжите числовой ряд: 18  20  24  32",
    type: "text",
    options: [62, 48, 74, 57, 60, 77],
  },
  {
    id: 4,
    title: "Выберите цвет, который сейчас наиболее Вам приятен:",
    type: "color",
    options: [
      "#A8A8A8",
      "#0000A9",
      "#00A701",
      "#F60100",
      "#FDFF19",
      "#A95403",
      "#000000",
      "#850068",
      "#46B2AC",
    ],
  },
  {
    id: 5,
    title:
      "Отдохните пару секунд, еще раз Выберите цвет, который сейчас наиболее Вам приятен:",
    type: "color",
    options: [
      "#A8A8A8",
      "#46B2AC",
      "#A95403",
      "#00A701",
      "#000000",
      "#F60100",
      "#850068",
      "#FDFF19",
      "#0000A9",
    ],
  },
  {
    id: 6,
    title: "Какой из городов лишний?",
    type: "text",
    options: ["Вашингтон", "Лондон", "Париж", "Нью-Йорк", "Москва", "Оттава"],
  },
  {
    id: 7,
    title: "Выберите правильную фигуру из четырёх пронумерованных.",
    type: "img",
    imgUrl:
      "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcRLBj_XyDSdI60A3VsLGz8nlD30BAnBqBKVog1mGxd-nKO8-hhQ",
    options: [1, 2, 3, 4],
  },
  {
    id: 8,
    title: "Вам привычнее и важнее:",
    type: "text",
    options: [
      "Наслаждаться каждой минутой проведенного времени",
      "Быть устремленными мыслями в будущее",
      "Учитывать в ежедневной практике прошлый опыт",
    ],
  },
  {
    id: 9,
    title:
      "Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:",
    type: "text",
    imgUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUNJlQMYJcJFkeWT1-sJshy5ilWE8GIioM9pFjrLTGjBoOGVL3",
    options: [
      "Оно остроконечноеоно устойчиво",
      "Оно устойчивое",
      "Оно-находится в состоянии равновесия",
    ],
  },
  {
    id: 10,
    title: "Вставьте подходящее число",
    type: "img",
    imgUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCADPAOQDASIAAhEBAxEB/8QAGgABAQEBAQEBAAAAAAAAAAAAAAQDBQECBv/EADcQAAICAQEEBggFBQEBAAAAAAABAgMEEQUSITETIkFRYYEUMjNCcbHB0RUjJFJTcoKRoeFiQ//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwD9mAAAAAAAAAAAAAAAAZ32wopnbY9IwWrNDn5X6zNrxVxrr0st+iA+dnZOQ7ZVZi3Z2Lpa14Ps8jpEe0apyqjfStbqHvxXeu1eaKKLoX0wtresZLVAaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADLJvjjUTtnyitfiY7PplXS7LV+dc9+fg32eRnf+sz4Y//AMqNLLPGXur6l4A5+L+kzJ4j4V2a2VeHfH6+Z0CTaFM7KVZT7al78PHw80BWDLHvjkUQthyktfgagAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAxyr442PO6XFRXBd77EbEFn6zaMa1xpxutPxn2Ly5ga7PolRj62cbrHv2PxZUDnbWsmp4tPSOqq2ek5p6PwWviB0Qcl1rB2jjQx7ZyVuqnXKTlw05+B1gIKP0efPH5VX62V+EveX1LyXaFEr8fWv21bU634r7mmLesnHhbHhvLiu59qA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAYZmQsXGnZzlyiu+T5I+cHHeNjKMnrZJ7033yfMxf6zaK7acb/dn/ABF4A5m0U8nNx8Kb3aZxc56e9p2HTJ8rDry1Hf3ozg9Yzi9HEDn5OPXsy+i/E6rssVc4N67yf2OwR17Piro23W2Xzh6m++EfIsAEFf6PaMq+VWT1o9yn2rz5l5NnY7yMZxhwsi96t90lyApBhh5CycaFmmkuUl3SXNG4AAAAAAAAAAAAAABLftHGx7Ojss/M/aotszW0lP2WNkWf2afMC4ELyc6fs8FRXY7LUv8ASQUdpT9azHqX/mLk/wDegFwIvQ8mXtM+z+yCj9zz8Kol7Wy+3+u16AVTuqr9eyEfjJInltTDi2lfGTXZHrP/AEfUNnYdfq41fnHX5lEYRitIxSXggI/xOEvZY2TZ8K9PnoHk5tkX0WE4arg7JpaeSLgBhhY/ouNGtvelzlLvb5s3AAAAAAAAAAglVkYuVbbjVxtrt0coOW61LvR68+2HtcHIXjFKS+ZcAIltXG10m7K/64NGtedi2+pkVv8AuRvprzMrMXHt9pTXL4xTA1TUlqmmvA9InsnDb1jU4PvhJo8/DpQ9lmZEPjLe+YFwIugzoepmQn4Tq+qZ50m0oc6Me1f+ZuPzQFwIfTr4+1wbl3uDUkPxbGj7XpKv662gLgfFVsLq42Vy3oSWqfeAMcvEWSoyjJ13Q4wsXNf8PnEy3ZN0ZEVXkx5x7JLvXgVk+XiQyoLVuFkXrCyPOLAoBHjZclb6NlpQvXqtcrF3r7FgGd90Memdtj0jBasgWfmuj0hYSdWm9pv9bTv00OjKMZxcZxUovmmiPOyJwlDExYp32rhryhHvYFONfDJohdW9YzWqNTDDxo4mLXRBtqC5vtNwAAAAAAAAAAAAAAAABJVtCq7NnjVdZwjrKSfDXuN76o31Srm5KMue69Gc6imujbTrqgoQWOuC+LA6pJj59eTl3Y9ab6LnLsbPnOunKUcTHeltnrSXuR7WT4NMKNrZFVS0hGmCSA6oBnddXRVKy2SjBc2wPqyyFVcp2SUYxWrb7DnxhPac1ZcnDET1hB87PF+Hge102Z8435UXChca6X2+MvsdEAlotEAAAAAwysWvKr3bNU1xjJcHF96MMbJsqtWNmaKz3LOyxffwLjLJx68qp12x1T5PtT70BqTbr/Ed70fh0enTa+PLQxoyLMW2ONmPXe4VW9k/B+JeAAAAAAAAAAAAAAAAAAAAgVc/xuVm5Lc6BLe04a6svAEd+zaL73dN2KbWjcZtcCPG2bGG1bW+m6OMYuEnN8X8e07BjlZNeLVv2N9yiuLk+5Ae5GRXjVOy2WkV/lvuRLTj2ZdscjMWkVxrp7I+L8T3HxrLrVk5um+vZ1rlWvuXAAAAAAAAAAABnfTXkVSrtipRfYR132YNkaMqTlTJ6V3P5S8fE6B8W1wurlXZFShJaNMD7Bzq5z2bNVXNzxX6lr5w8JeHidBNNap6oD0AAAAAAAAAAAAAAAAAmy8uOOlGK6S6fCFa5v8A4B7l5cMWCck5Tk9IQXOTMsXFm7PSctqVzXVivVrXcvHxPcXElGx5GTLfyJLygu5FgAAAAAAAAAAAAAAAAHzOEbIOM0pRa0afaRbK1UL4Rk3VC6UK0+OiXZ/ktnLchKT5JakuyYbuzqm+c9Zvzev1AsAAAAAAAAAAAAAAAAOfsyuMp5F1nXyFbKEpPsS5Jdy0OgQ4v5e0syvslu2L/Gj+QFwAAAAAAAAAAAAAAAAAAk2pPc2de1zcd1fF8PqUUw6OmEF7sUiXaXXWPR/JdHVeC4v5FV0pwpnKuG/NLqx72B9g5U6M2vElkzzJxuUd9w0W4u3Q2sysizZ1VuNV+bco+Khr2gXg5OXVk4GM8mOZZa69HKE0t2S+h1K579cZ6abyTA+gAAAAAAgujlZOZKqM549EIrrxXGb8GBeDnY9l2NtH0S213QnDfhKS6y8GeRpy8yy2dl9mNBSca4QSTaXawOkQ2fl7YpfZbVKPmuP3PNnX2ytyMa+fSSokkp/uT7/E92j1LMS/+O5JvwlwAuAAAAAAAAAAAAAAAAAAEN3X2vjw7K65T/zw+5ZOca4Oc5KMVzbeiRHjrpNqZVn7IxrXz+pXbVC6qVdi1hJaNASZ+D6dXrG+ceGsUnrB/Fdp7s7MV+zoZFm7Wkut2JaGS2flRq6COa1RyXUW8l3an3lbMV2FXi0WOmuD7tdQMWrNrzjwcMGL148Ha/sdVLRaI5yws6KSW0dEuS6FHQimopSe80uL7wPQYZGXTjL82aTfKK4t/BE29m5nqL0Sp+9Jaza+HYB0AQPBuo62Jkz3veja95S+x7DaKhJV5lbx59jlxg/gwLiXNzYYkUtHZbPhCuPOTKU01qnqmc63Zt8s6eVXmbkpLRLo091dy1A1wcScLJ5WS97ItXFLlBdyPMzNlCxY+LHpcmXZ2QXez7x8fLrtUrszpYaer0aRLVsvKpnZOvP0lZLek+iTbArwcNYlUk5uyyb3pzfaz52rHe2dc1zilNeT1+hpi05FW90+T0+vLqKOhrbDpKpwfvRaA9qlv1Ql+5Jn0SbLnv7Op15xjuvy4fQrAAAAAAAAAAAAAAABnkWKrHtsfKMG/wDCAl2X16rrv5bpS+n0LiXZtbq2fRF891N/F8SoADDJy6cVJ3T0b5RXFv4In3s3LfUj6JV+6XGb8uSAoyMunFWts0m+UVxb+CJ9/Ny/Zr0Wl+9JazflyRtjYNOM3KMXKx87Jvek/MpAmx8GjHbnGLlY+dk3rJ+ZSAAPmcI2RcZxUovmmj6AEDwbMfWWz7ejXbVPjB/VHsNoqE1Xm1vHs73xhL4MuPmcI2RcZxUovmmtUB6mmtU9Uz0geBZjtywLujX8U+MPLu8j2G0VCSrza3j2Pk3xhL4MC4Hiaa1T1R6BDs3qTy6f2XNr4PiXENX5e174/wAtcZ+aej+hcAAAAAAAAAAAAAACLa8msCcFztlGtebSLSTPxJ5caowt6LcmpuSWr4dwH3flUYcIqyaT00jFcW/gjDezcz1F6JV+6S1m/LsNsfCpx25xi5WPnZN6yfmUgTY+FTjvejHesfOyfGT8ykAAAAAAAAAAAAB8zhGyLjOKlF801qj6AEDwbMduWDc61/FPjB/Y9htFQmq82t483wTb1g/gy4+ZwjZBwnFSi+aa1QEWS9zaeHYuU1Ktvy1XyLzmz2VGNtU8e2Vca5qfRt6x8u46QAAAAAAAAH//2Q==",
    options: [34, 36, 53, 44, 66, 42],
  },
];
