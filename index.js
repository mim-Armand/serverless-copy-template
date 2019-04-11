'use strict';

class ServerlessPlugin {
    constructor(serverless, options) {
        this.serverless = serverless;
        this.options = options;

        this.hooks = {
            'after:package:finalize': this.copyTemplate.bind(this),
        };
    }

    static pbcopy(data) {
        var proc = require('child_process').spawn('pbcopy');
        proc.stdin.write(data);
        proc.stdin.end();
    }


    copyTemplate() {
        if (this.options.copyTemplate || this.options.copytemplate || this.options.CopyTemplate || this.options.Copytemplate
            || this.options.ct || this.options.CT || this.options.Ct || this.options.cT
        ) {
            let rsrc = this.serverless.service.provider.compiledCloudFormationTemplate.Resources;
            ServerlessPlugin.pbcopy(JSON.stringify(rsrc));
            this.serverless.cli.log('Copied the template to the clip-board!');
        }
    }
}

module.exports = ServerlessPlugin;
