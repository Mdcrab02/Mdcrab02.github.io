var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var angular2_1 = require('angular2/angular2');
var router_1 = require('angular2/router');
var UserDetails_1 = require('../../components/user-details/UserDetails');
var Home = (function () {
    function Home() {
        this.users = [];
        this.cache = {};
        this.selectedUser = null;
    }
    Home.prototype.addUser = function (currentUser) {
        this.users.push(currentUser);
    };
    Home.prototype.removeUser = function (user) {
        if (this.selectedUser && this.selectedUser.login === user) {
            this.selectedUser = null;
        }
        this.users.splice(this.users.indexOf(user), 1);
    };
    Home.prototype.getUser = function (u) {
        var _this = this;
        if (this.cache[u]) {
            return Promise.resolve(this.cache[u]);
        }
        else {
            return fetch("https://api.github.com/users/" + u)
                .then(function (r) {
                return r.json();
            })
                .then(function (user) {
                _this.cache[u] = user;
                return user;
            });
        }
    };
    Home.prototype.selectUser = function (user) {
        var _this = this;
        this.selectedUser = null;
        this.loading = true;
        this.getUser(user)
            .then(function (u) {
            console.log(u);
            _this.selectedUser = u;
            _this.loading = false;
        });
    };
    Home = __decorate([
        angular2_1.Component({
            selector: 'component-1'
        }),
        angular2_1.View({
            templateUrl: './components/home/home.html?v=0.0.0',
            directives: [router_1.RouterLink, angular2_1.NgFor, angular2_1.NgIf, UserDetails_1.UserDetails]
        }), 
        __metadata('design:paramtypes', [])
    ], Home);
    return Home;
})();
exports.Home = Home;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvaG9tZS9ob21lLnRzIl0sIm5hbWVzIjpbIkhvbWUiLCJIb21lLmNvbnN0cnVjdG9yIiwiSG9tZS5hZGRVc2VyIiwiSG9tZS5yZW1vdmVVc2VyIiwiSG9tZS5nZXRVc2VyIiwiSG9tZS5zZWxlY3RVc2VyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHlCQUEwQyxtQkFBbUIsQ0FBQyxDQUFBO0FBQzlELHVCQUF5QixpQkFBaUIsQ0FBQyxDQUFBO0FBQzNDLDRCQUEwQiwyQ0FBMkMsQ0FBQyxDQUFBO0FBRXRFO0lBWUVBO1FBQ0VDLElBQUlBLENBQUNBLEtBQUtBLEdBQUdBLEVBQUVBLENBQUNBO1FBQ2hCQSxJQUFJQSxDQUFDQSxLQUFLQSxHQUFHQSxFQUFFQSxDQUFDQTtRQUNoQkEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0E7SUFDM0JBLENBQUNBO0lBQ0RELHNCQUFPQSxHQUFQQSxVQUFRQSxXQUFXQTtRQUNqQkUsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsV0FBV0EsQ0FBQ0EsQ0FBQ0E7SUFDL0JBLENBQUNBO0lBQ0RGLHlCQUFVQSxHQUFWQSxVQUFXQSxJQUFJQTtRQUNiRyxFQUFFQSxDQUFDQSxDQUFDQSxJQUFJQSxDQUFDQSxZQUFZQSxJQUFJQSxJQUFJQSxDQUFDQSxZQUFZQSxDQUFDQSxLQUFLQSxLQUFLQSxJQUFJQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUMxREEsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDM0JBLENBQUNBO1FBQ0RBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE1BQU1BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEVBQUVBLENBQUNBLENBQUNBLENBQUNBO0lBQ2pEQSxDQUFDQTtJQUNPSCxzQkFBT0EsR0FBZkEsVUFBZ0JBLENBQVFBO1FBQXhCSSxpQkFhQ0E7UUFaQ0EsRUFBRUEsQ0FBQ0EsQ0FBQ0EsSUFBSUEsQ0FBQ0EsS0FBS0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7WUFDbEJBLE1BQU1BLENBQUNBLE9BQU9BLENBQUNBLE9BQU9BLENBQUNBLElBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLENBQUNBLENBQUNBO1FBQ3hDQSxDQUFDQTtRQUFDQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUNOQSxNQUFNQSxDQUFDQSxLQUFLQSxDQUFDQSxrQ0FBZ0NBLENBQUdBLENBQUNBO2lCQUM5Q0EsSUFBSUEsQ0FBQ0EsVUFBQUEsQ0FBQ0E7Z0JBQ0xBLE1BQU1BLENBQUNBLENBQUNBLENBQUNBLElBQUlBLEVBQUVBLENBQUNBO1lBQ2xCQSxDQUFDQSxDQUFDQTtpQkFDREEsSUFBSUEsQ0FBQ0EsVUFBQUEsSUFBSUE7Z0JBQ1JBLEtBQUlBLENBQUNBLEtBQUtBLENBQUNBLENBQUNBLENBQUNBLEdBQUdBLElBQUlBLENBQUNBO2dCQUNyQkEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7WUFDZEEsQ0FBQ0EsQ0FBQ0EsQ0FBQ0E7UUFDUEEsQ0FBQ0E7SUFDSEEsQ0FBQ0E7SUFDREoseUJBQVVBLEdBQVZBLFVBQVdBLElBQVdBO1FBQXRCSyxpQkFTQ0E7UUFSQ0EsSUFBSUEsQ0FBQ0EsWUFBWUEsR0FBR0EsSUFBSUEsQ0FBQ0E7UUFDekJBLElBQUlBLENBQUNBLE9BQU9BLEdBQUdBLElBQUlBLENBQUNBO1FBQ3BCQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxJQUFJQSxDQUFDQTthQUNmQSxJQUFJQSxDQUFDQSxVQUFDQSxDQUFDQTtZQUNOQSxPQUFPQSxDQUFDQSxHQUFHQSxDQUFDQSxDQUFDQSxDQUFDQSxDQUFDQTtZQUNmQSxLQUFJQSxDQUFDQSxZQUFZQSxHQUFHQSxDQUFDQSxDQUFDQTtZQUN0QkEsS0FBSUEsQ0FBQ0EsT0FBT0EsR0FBR0EsS0FBS0EsQ0FBQ0E7UUFDdkJBLENBQUNBLENBQUNBLENBQUNBO0lBQ1BBLENBQUNBO0lBakRITDtRQUFDQSxvQkFBU0EsQ0FBQ0E7WUFDUEEsUUFBUUEsRUFBRUEsYUFBYUE7U0FDMUJBLENBQUNBO1FBQ0RBLGVBQUlBLENBQUNBO1lBQ0ZBLFdBQVdBLEVBQUVBLDhDQUE4Q0E7WUFDM0RBLFVBQVVBLEVBQUVBLENBQUNBLG1CQUFVQSxFQUFDQSxnQkFBS0EsRUFBRUEsZUFBSUEsRUFBRUEseUJBQVdBLENBQUNBO1NBQ3BEQSxDQUFDQTs7YUE2Q0RBO0lBQURBLFdBQUNBO0FBQURBLENBbkRBLEFBbURDQSxJQUFBO0FBNUNZLFlBQUksT0E0Q2hCLENBQUEiLCJmaWxlIjoiY29tcG9uZW50cy9ob21lL2hvbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlldyxOZ0ZvciwgTmdJZn0gZnJvbSAnYW5ndWxhcjIvYW5ndWxhcjInO1xuaW1wb3J0IHtSb3V0ZXJMaW5rfSBmcm9tICdhbmd1bGFyMi9yb3V0ZXInO1xuaW1wb3J0IHtVc2VyRGV0YWlsc30gZnJvbSAnLi4vLi4vY29tcG9uZW50cy91c2VyLWRldGFpbHMvVXNlckRldGFpbHMnO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogJ2NvbXBvbmVudC0xJ1xufSlcbkBWaWV3KHtcbiAgICB0ZW1wbGF0ZVVybDogJy4vY29tcG9uZW50cy9ob21lL2hvbWUuaHRtbD92PTwlPSBWRVJTSU9OICU+JyxcbiAgICBkaXJlY3RpdmVzOiBbUm91dGVyTGluayxOZ0ZvciwgTmdJZiwgVXNlckRldGFpbHNdXG59KVxuZXhwb3J0IGNsYXNzIEhvbWUge1xuICB1c2VyczpzdHJpbmdbXTtcbiAgY2FjaGU6YW55O1xuICBsb2FkaW5nOmJvb2xlYW47XG4gIHNlbGVjdGVkVXNlcjphbnk7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMudXNlcnMgPSBbXTtcbiAgICB0aGlzLmNhY2hlID0ge307XG4gICAgdGhpcy5zZWxlY3RlZFVzZXIgPSBudWxsO1xuICB9XG4gIGFkZFVzZXIoY3VycmVudFVzZXIpIHtcbiAgICB0aGlzLnVzZXJzLnB1c2goY3VycmVudFVzZXIpO1xuICB9XG4gIHJlbW92ZVVzZXIodXNlcikge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkVXNlciAmJiB0aGlzLnNlbGVjdGVkVXNlci5sb2dpbiA9PT0gdXNlcikge1xuICAgICAgdGhpcy5zZWxlY3RlZFVzZXIgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnVzZXJzLnNwbGljZSh0aGlzLnVzZXJzLmluZGV4T2YodXNlciksIDEpO1xuICB9XG4gIHByaXZhdGUgZ2V0VXNlcih1OnN0cmluZykge1xuICAgIGlmICh0aGlzLmNhY2hlW3VdKSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRoaXMuY2FjaGVbdV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmV0Y2goYGh0dHBzOi8vYXBpLmdpdGh1Yi5jb20vdXNlcnMvJHt1fWApXG4gICAgICAgIC50aGVuKHIgPT4ge1xuICAgICAgICAgIHJldHVybiByLmpzb24oKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnRoZW4odXNlciA9PiB7XG4gICAgICAgICAgdGhpcy5jYWNoZVt1XSA9IHVzZXI7XG4gICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuICBzZWxlY3RVc2VyKHVzZXI6c3RyaW5nKSB7XG4gICAgdGhpcy5zZWxlY3RlZFVzZXIgPSBudWxsO1xuICAgIHRoaXMubG9hZGluZyA9IHRydWU7XG4gICAgdGhpcy5nZXRVc2VyKHVzZXIpXG4gICAgICAudGhlbigodSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyh1KTtcbiAgICAgICAgdGhpcy5zZWxlY3RlZFVzZXIgPSB1O1xuICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcbiAgICAgIH0pO1xuICB9XG5cbn1cbiJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==