import { ActivatedRoute } from '@angular/router';

export function shortenText(input: string, maxLength: number = 100): string {
    let result = input;
    if (input && input.length > maxLength + 3) {
        result = input.substr(0, maxLength) + '...';
    }
    return result;
}

export function encodeUnicode(url: string) {
    const newUrl = encodeURIComponent(url);
    return newUrl.replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/&/g, '%26');
}

export function getShortUserName(str: string) {
    if (str) {
        const trimText = str.trim();
        let result = '';
        const arrayString = trimText.split(' ');
        arrayString.forEach(
            p => {
                if (p[0]) {
                    result += p[0];
                }
            }
        )
        return result;
    } else {
        return 'Unknown';
    }
}

export function getSnapshotInfo(route: ActivatedRoute, paraName: string): string {
    if (route.snapshot.params[paraName]) {
        return route.snapshot.params[paraName];
    } else if (route.parent) {
        return getSnapshotInfo(route.parent, paraName);
    } else {
        return  'sd';
    }
}

export function openWindow(href: string, download?: string) {
    const config = download ?
        { target: '_blank', href: href } :
        { target: '_blank', href: href, download: download };
    Object.assign(document.createElement('a'), config).click();
}
