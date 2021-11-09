<?php

namespace ContainerPHh031l;
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'persistence'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'Persistence'.\DIRECTORY_SEPARATOR.'ObjectManager.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManagerInterface.php';
include_once \dirname(__DIR__, 4).''.\DIRECTORY_SEPARATOR.'vendor'.\DIRECTORY_SEPARATOR.'doctrine'.\DIRECTORY_SEPARATOR.'orm'.\DIRECTORY_SEPARATOR.'lib'.\DIRECTORY_SEPARATOR.'Doctrine'.\DIRECTORY_SEPARATOR.'ORM'.\DIRECTORY_SEPARATOR.'EntityManager.php';

class EntityManager_9a5be93 extends \Doctrine\ORM\EntityManager implements \ProxyManager\Proxy\VirtualProxyInterface
{
    /**
     * @var \Doctrine\ORM\EntityManager|null wrapped object, if the proxy is initialized
     */
    private $valueHolderc2ee2 = null;

    /**
     * @var \Closure|null initializer responsible for generating the wrapped object
     */
    private $initializerf99a2 = null;

    /**
     * @var bool[] map of public properties of the parent class
     */
    private static $publicProperties0f9f7 = [
        
    ];

    public function getConnection()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'getConnection', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->getConnection();
    }

    public function getMetadataFactory()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'getMetadataFactory', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->getMetadataFactory();
    }

    public function getExpressionBuilder()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'getExpressionBuilder', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->getExpressionBuilder();
    }

    public function beginTransaction()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'beginTransaction', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->beginTransaction();
    }

    public function getCache()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'getCache', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->getCache();
    }

    public function transactional($func)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'transactional', array('func' => $func), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->transactional($func);
    }

    public function commit()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'commit', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->commit();
    }

    public function rollback()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'rollback', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->rollback();
    }

    public function getClassMetadata($className)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'getClassMetadata', array('className' => $className), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->getClassMetadata($className);
    }

    public function createQuery($dql = '')
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'createQuery', array('dql' => $dql), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->createQuery($dql);
    }

    public function createNamedQuery($name)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'createNamedQuery', array('name' => $name), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->createNamedQuery($name);
    }

    public function createNativeQuery($sql, \Doctrine\ORM\Query\ResultSetMapping $rsm)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'createNativeQuery', array('sql' => $sql, 'rsm' => $rsm), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->createNativeQuery($sql, $rsm);
    }

    public function createNamedNativeQuery($name)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'createNamedNativeQuery', array('name' => $name), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->createNamedNativeQuery($name);
    }

    public function createQueryBuilder()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'createQueryBuilder', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->createQueryBuilder();
    }

    public function flush($entity = null)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'flush', array('entity' => $entity), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->flush($entity);
    }

    public function find($className, $id, $lockMode = null, $lockVersion = null)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'find', array('className' => $className, 'id' => $id, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->find($className, $id, $lockMode, $lockVersion);
    }

    public function getReference($entityName, $id)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'getReference', array('entityName' => $entityName, 'id' => $id), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->getReference($entityName, $id);
    }

    public function getPartialReference($entityName, $identifier)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'getPartialReference', array('entityName' => $entityName, 'identifier' => $identifier), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->getPartialReference($entityName, $identifier);
    }

    public function clear($entityName = null)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'clear', array('entityName' => $entityName), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->clear($entityName);
    }

    public function close()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'close', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->close();
    }

    public function persist($entity)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'persist', array('entity' => $entity), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->persist($entity);
    }

    public function remove($entity)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'remove', array('entity' => $entity), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->remove($entity);
    }

    public function refresh($entity)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'refresh', array('entity' => $entity), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->refresh($entity);
    }

    public function detach($entity)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'detach', array('entity' => $entity), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->detach($entity);
    }

    public function merge($entity)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'merge', array('entity' => $entity), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->merge($entity);
    }

    public function copy($entity, $deep = false)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'copy', array('entity' => $entity, 'deep' => $deep), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->copy($entity, $deep);
    }

    public function lock($entity, $lockMode, $lockVersion = null)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'lock', array('entity' => $entity, 'lockMode' => $lockMode, 'lockVersion' => $lockVersion), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->lock($entity, $lockMode, $lockVersion);
    }

    public function getRepository($entityName)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'getRepository', array('entityName' => $entityName), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->getRepository($entityName);
    }

    public function contains($entity)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'contains', array('entity' => $entity), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->contains($entity);
    }

    public function getEventManager()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'getEventManager', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->getEventManager();
    }

    public function getConfiguration()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'getConfiguration', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->getConfiguration();
    }

    public function isOpen()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'isOpen', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->isOpen();
    }

    public function getUnitOfWork()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'getUnitOfWork', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->getUnitOfWork();
    }

    public function getHydrator($hydrationMode)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'getHydrator', array('hydrationMode' => $hydrationMode), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->getHydrator($hydrationMode);
    }

    public function newHydrator($hydrationMode)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'newHydrator', array('hydrationMode' => $hydrationMode), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->newHydrator($hydrationMode);
    }

    public function getProxyFactory()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'getProxyFactory', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->getProxyFactory();
    }

    public function initializeObject($obj)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'initializeObject', array('obj' => $obj), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->initializeObject($obj);
    }

    public function getFilters()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'getFilters', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->getFilters();
    }

    public function isFiltersStateClean()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'isFiltersStateClean', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->isFiltersStateClean();
    }

    public function hasFilters()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'hasFilters', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return $this->valueHolderc2ee2->hasFilters();
    }

    /**
     * Constructor for lazy initialization
     *
     * @param \Closure|null $initializer
     */
    public static function staticProxyConstructor($initializer)
    {
        static $reflection;

        $reflection = $reflection ?? new \ReflectionClass(__CLASS__);
        $instance   = $reflection->newInstanceWithoutConstructor();

        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $instance, 'Doctrine\\ORM\\EntityManager')->__invoke($instance);

        $instance->initializerf99a2 = $initializer;

        return $instance;
    }

    protected function __construct(\Doctrine\DBAL\Connection $conn, \Doctrine\ORM\Configuration $config, \Doctrine\Common\EventManager $eventManager)
    {
        static $reflection;

        if (! $this->valueHolderc2ee2) {
            $reflection = $reflection ?? new \ReflectionClass('Doctrine\\ORM\\EntityManager');
            $this->valueHolderc2ee2 = $reflection->newInstanceWithoutConstructor();
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);

        }

        $this->valueHolderc2ee2->__construct($conn, $config, $eventManager);
    }

    public function & __get($name)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, '__get', ['name' => $name], $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        if (isset(self::$publicProperties0f9f7[$name])) {
            return $this->valueHolderc2ee2->$name;
        }

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderc2ee2;

            $backtrace = debug_backtrace(false, 1);
            trigger_error(
                sprintf(
                    'Undefined property: %s::$%s in %s on line %s',
                    $realInstanceReflection->getName(),
                    $name,
                    $backtrace[0]['file'],
                    $backtrace[0]['line']
                ),
                \E_USER_NOTICE
            );
            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderc2ee2;
        $accessor = function & () use ($targetObject, $name) {
            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __set($name, $value)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, '__set', array('name' => $name, 'value' => $value), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderc2ee2;

            $targetObject->$name = $value;

            return $targetObject->$name;
        }

        $targetObject = $this->valueHolderc2ee2;
        $accessor = function & () use ($targetObject, $name, $value) {
            $targetObject->$name = $value;

            return $targetObject->$name;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = & $accessor();

        return $returnValue;
    }

    public function __isset($name)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, '__isset', array('name' => $name), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderc2ee2;

            return isset($targetObject->$name);
        }

        $targetObject = $this->valueHolderc2ee2;
        $accessor = function () use ($targetObject, $name) {
            return isset($targetObject->$name);
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $returnValue = $accessor();

        return $returnValue;
    }

    public function __unset($name)
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, '__unset', array('name' => $name), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        $realInstanceReflection = new \ReflectionClass('Doctrine\\ORM\\EntityManager');

        if (! $realInstanceReflection->hasProperty($name)) {
            $targetObject = $this->valueHolderc2ee2;

            unset($targetObject->$name);

            return;
        }

        $targetObject = $this->valueHolderc2ee2;
        $accessor = function () use ($targetObject, $name) {
            unset($targetObject->$name);

            return;
        };
        $backtrace = debug_backtrace(true, 2);
        $scopeObject = isset($backtrace[1]['object']) ? $backtrace[1]['object'] : new \ProxyManager\Stub\EmptyClassStub();
        $accessor = $accessor->bindTo($scopeObject, get_class($scopeObject));
        $accessor();
    }

    public function __clone()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, '__clone', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        $this->valueHolderc2ee2 = clone $this->valueHolderc2ee2;
    }

    public function __sleep()
    {
        $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, '__sleep', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;

        return array('valueHolderc2ee2');
    }

    public function __wakeup()
    {
        \Closure::bind(function (\Doctrine\ORM\EntityManager $instance) {
            unset($instance->config, $instance->conn, $instance->metadataFactory, $instance->unitOfWork, $instance->eventManager, $instance->proxyFactory, $instance->repositoryFactory, $instance->expressionBuilder, $instance->closed, $instance->filterCollection, $instance->cache);
        }, $this, 'Doctrine\\ORM\\EntityManager')->__invoke($this);
    }

    public function setProxyInitializer(\Closure $initializer = null) : void
    {
        $this->initializerf99a2 = $initializer;
    }

    public function getProxyInitializer() : ?\Closure
    {
        return $this->initializerf99a2;
    }

    public function initializeProxy() : bool
    {
        return $this->initializerf99a2 && ($this->initializerf99a2->__invoke($valueHolderc2ee2, $this, 'initializeProxy', array(), $this->initializerf99a2) || 1) && $this->valueHolderc2ee2 = $valueHolderc2ee2;
    }

    public function isProxyInitialized() : bool
    {
        return null !== $this->valueHolderc2ee2;
    }

    public function getWrappedValueHolderValue()
    {
        return $this->valueHolderc2ee2;
    }
}

if (!\class_exists('EntityManager_9a5be93', false)) {
    \class_alias(__NAMESPACE__.'\\EntityManager_9a5be93', 'EntityManager_9a5be93', false);
}
