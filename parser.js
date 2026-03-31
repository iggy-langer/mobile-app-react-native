import { parse } from 'acorn';

const parser = (code) => {
    try {
        const ast = parse(code, { ecmaVersion: 2020, sourceType: 'module' });
        return ast;
    } catch (error) {
        if (error instanceof SyntaxError) {
            throw error;
        } else {
            return null;
        }
    }
};

export default parser;