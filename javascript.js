            // Looked up online how to link a CSS stylesheet using javascript.

            function dark_mode(){
                let head = document.getElementsByTagName('HEAD')[0];
                let link = document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = 'darkMode.css';
                head.appendChild(link);
            }
           
            function light_mode(){
                let head = document.getElementsByTagName('HEAD')[0];
                let link = document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = 'lightMode.css';
                head.appendChild(link);
            }

            function default_colors(){
                let head = document.getElementsByTagName('HEAD')[0];
                let link = document.createElement('link');
                link.rel = 'stylesheet';
                link.type = 'text/css';
                link.href = 'defaultColors.css';
                head.appendChild(link);
            }