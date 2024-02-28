import ester from 'janschl-ester';
import axios from 'axios';

const filePath = getFilePathFromCLI()
const outputFilePath = path.join(process.cwd(), `${path.basename(filePath, '.js')}.linted.js`)
const code = fs.readFileSync(filePath, 'utf-8')
const ast = espree.parse(code, {
    ecmaVersion: 2022,
    loc: true,
    sourceType: 'module',
}
)

const syntaxTreeProcessor = new SyntaxTreeProcessor(filePath)
const errors = syntaxTreeProcessor.process(ast)
Reporter.report({
    errors,
    ast,
    outputFilePath
});

const parsedValue = ester.ester();

const emitter = {
    events: {},
    publish: function (event, data) {
        if (this.events.hasOwnProperty(event)) {
            this.events[event].forEach(listener => {
                return listener(data);
            });
        }
    },
    subscribe: function (event, listener) {
        if (!this.events.hasOwnProperty(event)) {
            this.events[event] = [];
        }
        this.events[event].push(listener);

        return {
            unsubscribe: function () {
                const index = this.events[event].indexOf(listener);
                if (index !== -1) this.events[event].splice(index, 1);
            }.bind(this)
        };
    }
};

export function amiap(gamepadInstance, options) {
	const { vibrationActuator } = gamepadInstance;
	const vibrationSettings = options ? options : this.settings.vibration;

	if (hasVibrationSupport(vibrationActuator)) {
		const { type } = vibrationActuator;

		return gamepadInstance.vibrationActuator.playEffect(type, vibrationSettings);
	} else {
		log('');
	}
}