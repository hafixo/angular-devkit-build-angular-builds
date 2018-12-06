"use strict";
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
function normalizeOptimization(optimization) {
    const scripts = !!(typeof optimization === 'object' ? optimization.scripts : optimization);
    const styles = !!(typeof optimization === 'object' ? optimization.styles : optimization);
    return {
        scripts,
        styles,
    };
}
exports.normalizeOptimization = normalizeOptimization;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibm9ybWFsaXplLW9wdGltaXphdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIuLyIsInNvdXJjZXMiOlsicGFja2FnZXMvYW5ndWxhcl9kZXZraXQvYnVpbGRfYW5ndWxhci9zcmMvdXRpbHMvbm9ybWFsaXplLW9wdGltaXphdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HOztBQVNILFNBQWdCLHFCQUFxQixDQUFDLFlBQWlDO0lBQ3JFLE1BQU0sT0FBTyxHQUFHLENBQUMsQ0FBQyxDQUFDLE9BQU8sWUFBWSxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDM0YsTUFBTSxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsT0FBTyxZQUFZLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUV6RixPQUFPO1FBQ0wsT0FBTztRQUNQLE1BQU07S0FDUCxDQUFDO0FBQ0osQ0FBQztBQVJELHNEQVFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQgeyBPcHRpbWl6YXRpb25PcHRpb25zLCBTb3VyY2VNYXBPcHRpb25zIH0gZnJvbSAnLi4vYnJvd3Nlci9zY2hlbWEnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vcm1hbGl6ZWRPcHRpbWl6YXRpb24ge1xuICBzY3JpcHRzOiBib29sZWFuO1xuICBzdHlsZXM6IGJvb2xlYW47XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBub3JtYWxpemVPcHRpbWl6YXRpb24ob3B0aW1pemF0aW9uOiBPcHRpbWl6YXRpb25PcHRpb25zKTogTm9ybWFsaXplZE9wdGltaXphdGlvbiB7XG4gIGNvbnN0IHNjcmlwdHMgPSAhISh0eXBlb2Ygb3B0aW1pemF0aW9uID09PSAnb2JqZWN0JyA/IG9wdGltaXphdGlvbi5zY3JpcHRzIDogb3B0aW1pemF0aW9uKTtcbiAgY29uc3Qgc3R5bGVzID0gISEodHlwZW9mIG9wdGltaXphdGlvbiA9PT0gJ29iamVjdCcgPyBvcHRpbWl6YXRpb24uc3R5bGVzIDogb3B0aW1pemF0aW9uKTtcblxuICByZXR1cm4ge1xuICAgIHNjcmlwdHMsXG4gICAgc3R5bGVzLFxuICB9O1xufVxuIl19