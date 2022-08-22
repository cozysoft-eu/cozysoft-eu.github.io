import PullToRefresh from 'pulltorefreshjs';

console.log("%cHELLO, WORLD!!!", "color: green");
const ptr = PullToRefresh.init({
    mainElement: 'body',
    onRefresh() {
        window.location.reload();
    }
});
