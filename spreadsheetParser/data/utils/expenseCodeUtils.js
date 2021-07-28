export function getFormattedString(code) {
    let parts = getParts(code);
    return parts.join('.');
}

export function getParts(code) {
    if (code instanceof Array) {
        return code;
    }
    if (typeof code === 'number') {
        code = code.toString();
    }
    if (typeof code === 'string') {
        code = code.replace(/[^0-9]/gi, '');
    }

    return [
        code.substring(0,2),
        code.substring(2,4),
        code.substring(4,6),
        code.substring(6,8)
    ]
}

export function getUpperCode(code) {
    let parts = getParts(code);
    let i;

    for (i = 0; i < parts.length; i++) {
        if (parts[i] === '00') break;
    }

    parts[i - 1] = '00';

    return getFormattedString(parts);
}

export function getTopCode(code) {
    do {
        code = getUpperCode(code);
    } while (getParts(code)[1] != '00')
    return code;
}

export function getThirdCode(code) {
    let parts = getParts(code);
    parts[3] = '00';
    return getFormattedString(parts)
}