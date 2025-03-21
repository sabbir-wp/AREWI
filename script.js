let target = "";

// Set Target
function setTarget() {
    target = document.getElementById("targetInput").value.trim();
    if (target) {
        alert(`Target set to: ${target}`);
    } else {
        alert("Please enter a valid target.");
    }
}

// Subdomain Discovery
function subdomainDork(service) {
    if (!target) {
        alert("Please set a target first.");
        return;
    }
    const url = `https://${service}/?q=${target}`;
    window.open(url, "_blank");
    logResult(`Subdomain discovery started using ${service}.`);
}

// Git Dorking
function gitDork(query) {
    if (!target) {
        alert("Please set a target first.");
        return;
    }
    const url = `https://github.com/search?q=${query}+${target}&type=code`;
    window.open(url, "_blank");
    logResult(`Git dorking started for: ${query}`);
}

// Custom Dork
function runCustomDork() {
    const dork = document.getElementById("customDorkInput").value.trim();
    if (!dork || !target) {
        alert("Please enter a custom dork and set a target.");
        return;
    }
    const url = `https://www.google.com/search?q=${dork}+site:${target}`;
    window.open(url, "_blank");
    logResult(`Custom dork executed: ${dork}`);
}

// Port Scanning
function scanPorts() {
    if (!target) {
        alert("Please set a target first.");
        return;
    }
    logResult(`Port scanning started for: ${target}`);
    // Integrate with nmap or other tools here
}

// Security Headers Check
function checkSecurityHeaders() {
    if (!target) {
        alert("Please set a target first.");
        return;
    }
    const url = `https://securityheaders.com/?q=${target}`;
    window.open(url, "_blank");
    logResult(`Security headers check started for: ${target}`);
}

// SSL/TLS Check
function testSSL() {
    if (!target) {
        alert("Please set a target first.");
        return;
    }
    const url = `https://www.ssllabs.com/ssltest/analyze.html?d=${target}`;
    window.open(url, "_blank");
    logResult(`SSL/TLS check started for: ${target}`);
}

// OWASP ZAP Scan
function runOWASPZAP() {
    if (!target) {
        alert("Please set a target first.");
        return;
    }
    logResult(`OWASP ZAP scan started for: ${target}`);
    // Integrate with OWASP ZAP API here
}

// Log Results
function logResult(message) {
    const resultsPanel = document.getElementById("resultsPanel");
    resultsPanel.textContent += `\n[${new Date().toLocaleTimeString()}] ${message}`;
    resultsPanel.scrollTop = resultsPanel.scrollHeight;
}

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});
