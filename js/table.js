class Table {
    constructor(headers) {
        this.table = this.init_table();
        this.headers = headers;
        this.th = this.init_th();
    };
    init_table() {
        var table = document.createElement("table");
        table.id = "table";
        table.className = "table table-sm container";
        document.body.appendChild(table);
        return table;
    }
    init_th() {
        var tr = document.createElement("tr");
        for (var header of this.headers) {
            var th = document.createElement("th");
            th.innerHTML = header;
            th.className = header == "" ? "w-25" : "text-center w-25 bg-dark text-light table-bordered";
            tr.appendChild(th);
        }
        document.getElementById("table").appendChild(tr);
        return tr;
    }
    init_tr(args) {
        var tr = document.createElement("tr");
        tr.className = "table-bordered";
        for (var arg of args) {
            var td = document.createElement("td");
            if (arg["input"]) {
                var input = document.createElement("input");
                input.type = "number";
                input.className = "form-control";
                if (arg["type"]) {
                    input.id = `${arg['name']}_${arg['type']}`;
                } else {
                    input.id = `${arg['name']}`;
                }
                td.appendChild(input);
            } else {
                if (arg['type'] == "header") {
                    td.className = "text-right";
                    if (!arg["bg"]) {
                        td.className += " bg-dark text-light";
                    }
                    var b = document.createElement("b");
                    b.innerHTML = arg['name'];
                    td.appendChild(b);
                } else {
                    td.className = "text-center";
                    if (arg['type']) {
                        td.id = `${arg['name']}_${arg['type']}`;
                    } else {
                        td.id = `${arg['name']}`;
                    }
                }
                if (arg["bg"]) {
                    td.style.backgroundColor = arg["bg"];
                }
                if (arg["colspan"]) {
                    td.setAttribute("colspan", arg["colspan"]);
                }
                td.style.verticalAlign = "middle";
            }
            tr.appendChild(td);
        }
        document.getElementById("table").appendChild(tr);
    }
};

const table = new Table(["", "Case Group", "Expected Group", "Control Group"]);

for (var name of ["X", "N"]) {
    table.init_tr([
        {"name": name, "type": "header"},
        {"name": name, "type": "case", "input": 1},
        {"name": name, "type": "expected"},
        {"name": name, "type": "control", "input": 1},
    ]);
}

for (var name of ["p", "Var", "SD"]) {
    table.init_tr([
        {"name": name, "type": "header"},
        {"name": name, "type": "case"},
        {"name": name, "type": "expected"},
        {"name": name, "type": "control"},
    ]);
}

const confidence_interval = {
    "μ - 3SD or 0.27 %": {"val": -3, "bg": "#FF6666"},
    "μ - 2SD or 4.55 %": {"val": -2, "bg": "#FFB266"},
    "μ - 1SD or 31.73 %": {"val": -1, "bg": "#FFFF66"},
    "μ or 50 %": {"val": 0, "bg": "#B2FF66"},
    "μ + 1SD or 68.27 %": {"val": 1, "bg": "#FFFF66"},
    "μ + 2SD or 95.45 %": {"val": 2, "bg": "#FFB266"},
    "μ + 3SD or 99.73 %": {"val": 3, "bg": "#FF6666"}
};

for (var [k, v] of Object.entries(confidence_interval)) {
    table.init_tr([
        {"name": k, "type": "header", "bg": v["bg"]},
        {"name": k, "type": "case", "bg": v["bg"]},
        {"name": k, "type": "expected", "bg": v["bg"]},
        {"name": k, "type": "control", "bg": v["bg"]},
    ]);
}

const others = [
    "Z-Score",
    "Cohen's D Effect",
    "Cumulative Risk",
    "P(x <= k)",
    "P(x = k)",
    "P(x >= k)",
    "Approx. freq. of occ."
];

for (var name of others) {
    table.init_tr([
        {"name": name, "type": "header"},
        {"name": name, "type": "", "colspan": 3}
    ]);
}

table.init_tr(
    [{"name": "Significance Level (α)", "type": "header"},
    {"name": "Alpha", "type": "", "input": 1},
    {"name": "Significance Level", "type": "", "colspan": 2}]
);

document.getElementById("Alpha").setAttribute("step", 0.0001);
