import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('main');

  const navItems = [
    { id: 'main', label: 'Главная', icon: 'Home' },
    { id: 'news', label: 'Новости', icon: 'Newspaper' },
    { id: 'rules', label: 'Правила', icon: 'ScrollText' },
    { id: 'forum', label: 'Форум', icon: 'MessageSquare' },
    { id: 'complaints', label: 'Жалобы', icon: 'AlertTriangle' },
    { id: 'donate', label: 'Донат', icon: 'CreditCard' },
    { id: 'guides', label: 'Гайды', icon: 'BookOpen' },
    { id: 'vacancies', label: 'Вакансии', icon: 'Briefcase' },
  ];

  const stats = [
    { label: 'Онлайн игроков', value: '1,247', icon: 'Users', color: 'text-primary' },
    { label: 'Всего игроков', value: '28,934', icon: 'TrendingUp', color: 'text-secondary' },
    { label: 'Новых тем', value: '142', icon: 'MessageCircle', color: 'text-accent' },
    { label: 'Администрация', value: '24', icon: 'Shield', color: 'text-primary' },
  ];

  const newsItems = [
    {
      title: 'Обновление 2.5 - Новые возможности',
      date: '18 октября 2024',
      category: 'Обновления',
      excerpt: 'Добавлены новые фракции, транспорт и уникальные задания для игроков',
      badge: 'Важное',
    },
    {
      title: 'Набор в администрацию',
      date: '17 октября 2024',
      category: 'Вакансии',
      excerpt: 'Открыт набор на должности модераторов и администраторов сервера',
      badge: 'Актуально',
    },
    {
      title: 'Конкурс на лучший дом',
      date: '15 октября 2024',
      category: 'События',
      excerpt: 'Участвуйте в конкурсе и получите эксклюзивные награды',
      badge: 'Событие',
    },
  ];

  const forumCategories = [
    { name: 'Общие обсуждения', topics: 1243, posts: 8924, icon: 'MessageSquare' },
    { name: 'Помощь новичкам', topics: 432, posts: 3201, icon: 'HelpCircle' },
    { name: 'Предложения', topics: 287, posts: 1849, icon: 'Lightbulb' },
    { name: 'Баги и ошибки', topics: 156, posts: 923, icon: 'Bug' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-muted">
      <div 
        className="relative h-[500px] bg-cover bg-center flex items-center justify-center overflow-hidden"
        style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/a87d9a68-25f0-4600-974f-80c6fa30553d/files/6b0eb6c3-c073-47ac-bc2b-d298fa563926.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        
        <div className="relative z-10 text-center px-4 animate-slide-up">
          <h1 className="font-heading text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
            HORIZON MOBILE
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 font-medium">
            Лучший КРМП сервер на мобильных устройствах
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-bold text-lg px-8 animate-glow-pulse">
              <Icon name="Play" className="mr-2" size={20} />
              Начать играть
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-heading font-bold text-lg px-8">
              <Icon name="Download" className="mr-2" size={20} />
              Скачать
            </Button>
          </div>
        </div>
      </div>

      <nav className="sticky top-0 z-50 bg-card/95 backdrop-blur-lg border-b border-border shadow-lg">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between py-4 overflow-x-auto">
            <div className="flex gap-1 min-w-max">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? 'default' : 'ghost'}
                  onClick={() => setActiveSection(item.id)}
                  className={`font-medium transition-all ${
                    activeSection === item.id
                      ? 'bg-primary text-primary-foreground shadow-lg shadow-primary/50'
                      : 'hover:bg-muted'
                  }`}
                >
                  <Icon name={item.icon} className="mr-2" size={18} />
                  {item.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              <CardContent className="p-6 flex items-center gap-4">
                <div className={`p-3 rounded-lg bg-muted ${stat.color}`}>
                  <Icon name={stat.icon} size={28} />
                </div>
                <div>
                  <p className="text-3xl font-heading font-bold">{stat.value}</p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="lg:col-span-2">
            <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
              <Icon name="Newspaper" className="text-primary" size={32} />
              Последние новости
            </h2>
            <div className="space-y-6">
              {newsItems.map((news, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-primary/50 transition-all hover:shadow-lg hover:shadow-primary/20 group cursor-pointer">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <Badge className="bg-primary/20 text-primary border-primary/30">{news.badge}</Badge>
                      <span className="text-sm text-muted-foreground">{news.date}</span>
                    </div>
                    <CardTitle className="font-heading text-2xl group-hover:text-primary transition-colors">{news.title}</CardTitle>
                    <CardDescription className="text-sm text-accent">{news.category}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{news.excerpt}</p>
                    <Button variant="link" className="p-0 mt-3 text-primary font-medium">
                      Читать далее
                      <Icon name="ArrowRight" className="ml-2" size={16} />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
              <Icon name="MessageSquare" className="text-secondary" size={32} />
              Форум
            </h2>
            <div className="space-y-4">
              {forumCategories.map((category, index) => (
                <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-secondary/50 transition-all hover:shadow-lg hover:shadow-secondary/20 cursor-pointer group">
                  <CardContent className="p-5">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-muted text-secondary">
                        <Icon name={category.icon} size={24} />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-heading font-semibold text-lg mb-1 group-hover:text-secondary transition-colors">
                          {category.name}
                        </h3>
                        <div className="flex gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Icon name="FileText" size={14} />
                            {category.topics} тем
                          </span>
                          <span className="flex items-center gap-1">
                            <Icon name="MessageCircle" size={14} />
                            {category.posts} сообщений
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              <Button className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-heading font-bold" size="lg">
                <Icon name="ArrowRight" className="mr-2" size={20} />
                Перейти на форум
              </Button>
            </div>
          </div>
        </div>

        <Card className="bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 border-primary/30 backdrop-blur">
          <CardContent className="p-8 text-center">
            <h2 className="font-heading text-3xl font-bold mb-4">Присоединяйся к сообществу</h2>
            <p className="text-lg text-muted-foreground mb-6">
              Более 28,000 игроков уже наслаждаются игрой на Horizon Mobile
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button size="lg" className="bg-primary hover:bg-primary/90 font-heading font-bold">
                <Icon name="Users" className="mr-2" size={20} />
                Discord сервер
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground font-heading font-bold">
                <Icon name="Send" className="mr-2" size={20} />
                Telegram канал
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <footer className="bg-card/30 backdrop-blur border-t border-border mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center text-muted-foreground">
            <p className="font-heading font-semibold text-lg mb-2">© 2024 Horizon Mobile CRMP</p>
            <p className="text-sm">Все права защищены. Проект не связан с Rockstar Games.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
