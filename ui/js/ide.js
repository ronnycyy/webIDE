let editor;

window.onload = function () {
    editor = ace.edit('editor');   // 初始化编辑器，选择id为editor的元素
    editor.setTheme('ace/theme/monokai');
    editor.session.setMode('ace/mode/javascript');
}

function executeCode() {
    $.ajax({
        url: 'http://localhost:3000/',
        method: 'POST',
        data: {
            code: editor.getSession().getValue()  // 获取输入的代码
        },
        success: function (response) {
            $('.output').text(response);  // 展示执行结果
        }
    });
}