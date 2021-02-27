#  Spring Security 的初步体验

### POM

``` java
<dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-security</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.security.oauth</groupId>
            <artifactId>spring-security-oauth2</artifactId>
            <version>2.3.8.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.projectlombok</groupId>
            <artifactId>lombok</artifactId>
            <optional>true</optional>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
    </dependencies>

```

### Controller

``` java
@RestController
public class HelloController {

    @GetMapping("/admin/hello")
    public String hello2() {
        return "admin";
    }

    @GetMapping("/db/hello")
    public String hello3() {
        return "db";
    }

    @GetMapping("/user/hello")
    public String hello4() {
        return "user";
    }
}
```

### config

``` java

@Configuration
public class MyWebSecurityConfig extends WebSecurityConfigurerAdapter {
    @Bean
    PasswordEncoder passwordEncoder() {
        return NoOpPasswordEncoder.getInstance();
    }

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication()
                .withUser("root").password("123456").roles("ADMIN", "DBA")
                .and()
                .withUser("admin").password("123456").roles("ADMIN", "USER")
                .and()
                .withUser("abc").password("123456").roles("USER");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.authorizeRequests()
                //  url为/admin/的需要由admin角色
                .antMatchers("/admin/**")
                .hasRole("ADMIN")

                // /user/的需要admin或者user都可
                .antMatchers("/user/**")
                .access("hasAnyRole('ADMIN','USER')")

                // /db/的需要admin和dba角色才可以
                .antMatchers("/db/**")
                .access("hasAnyRole('ADMIN') and  hasRole('DBA')")

                // 任何请求都必须经过身份验证
                .anyRequest().authenticated()

//                // 表示开启表单登陆，security的登陆界面，permitAll表示和登陆相关的接口不需要认证
//                // 补充：permitAll()代表有身份但是不校验，anonymous()代表没有身份呢也可以访问
//                .and().formLogin()
//                .loginProcessingUrl("/url").permitAll()

/************************       测试访问的时候将上面注释放开，将下面注释    *****************************/

                // 上面登录表单一直使用Spring Security提供的页面，
                // 登录成功后也是默认的页面跳转，
                // 但是在前后端分离的开发方式中，前后端的数据交互通过JSON进行，
                // 这时，登录成功后就不是页面跳转了，而是一段JSON数据。
                .and().formLogin()
                //登陆页面
                .loginPage("/login_page")
                //登陆请求处理接口
                .loginProcessingUrl("/login")
                //默认用户名，密码
                .usernameParameter("name")
                .passwordParameter("pwd")
                //登陆成功后的操作
                .successHandler(new AuthenticationSuccessHandler() {
                    @Override
                    public void onAuthenticationSuccess(HttpServletRequest httpServletRequest,
                                                        HttpServletResponse httpServletResponse,
                                                        Authentication authentication) throws IOException, ServletException {
                        //返回成功的Json信息
                    }
                })
                //登陆失败后
                .failureHandler(new AuthenticationFailureHandler() {
                    @Override
                    public void onAuthenticationFailure(HttpServletRequest httpServletRequest,
                                                        HttpServletResponse httpServletResponse,
                                                        AuthenticationException e) throws IOException, ServletException {
                        //返回失败的Json信息
                    }
                })
                .permitAll()
                .and()
                //开启注销登录
                .logout()
                .logoutUrl("/logout")
                //清楚身份信息
                .clearAuthentication(true)
                //使得session失效
                .invalidateHttpSession(true)
                //注销处理
                .addLogoutHandler(new LogoutHandler() {
                    @Override
                    public void logout(HttpServletRequest httpServletRequest,
                                       HttpServletResponse httpServletResponse,
                                       Authentication authentication) {

                    }
                })
                //注销成功处理
                .logoutSuccessHandler(new LogoutSuccessHandler() {
                    @Override
                    public void onLogoutSuccess(HttpServletRequest httpServletRequest,
                                                HttpServletResponse resp,
                                                Authentication authentication) throws IOException, ServletException {
                        //跳转到自定义登陆页面
                    }
                })
/*****************************************************************************************************/
                         
                // 表示关闭csrf
                .and().csrf().disable();
    }
}
```
