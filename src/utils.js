// that function generates random side

export const getRandomSide = (sides) => {
    return sides[Math.floor(Math.random() * sides.length)]
}