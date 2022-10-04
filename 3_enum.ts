//enum - Энум перечесление -> позволяет структурировать код если есть какие то перечесления, есть два вида записи
//необычная реализация энумов чтобы получить значение нужно обратится к индексу 
enum Membership {
  Simple,
  Standard,
  Premium
}

const membership = Membership.Standard
const membershipReverse = Membership[2]

console.log(membership)
console.log(membershipReverse)

//========
//второй вариант записи более понятен
enum SocialMedia {
  VK = 'VK',
  FACEBOOK = 'FACEBOOK',
  INSTAGRAM = 'INSTAGRAM'
}

const social = SocialMedia.INSTAGRAM
console.log(social)
